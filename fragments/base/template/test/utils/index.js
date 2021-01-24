const { spawn } = require('child_process')
const { writeFileSync, readFileSync, existsSync, unlinkSync } = require('fs')
const http = require('http')
const fkill = require('fkill')
const DEFAULT_PID_PATH = '.pid'
const wait = time => new Promise(resolve => setTimeout(resolve, time))

async function backgroundSpawn(cmd, params, options) {
    const pidPath = options.pidPath || DEFAULT_PID_PATH
    if (existsSync(pidPath))
        await killBackgroundProcess(pidPath)

    console.log('running script in background:', cmd, params)
    const child = spawn(cmd, params, { stdio: 'ignore', detached: true, ...options })
    child.unref()
    writeFileSync(pidPath, child.pid.toString())
}

async function killBackgroundProcess(pidPath) {
    pidPath = pidPath || DEFAULT_PID_PATH
    try {
        const pid = readFileSync(pidPath, 'utf8')
        await fkill(Number(pid), { tree: true, force: true })
        unlinkSync(pidPath)
        console.log('killed old server')
    } catch (err) {
        console.log(err)
    }
}

async function checkPort(port, timeout) {
    const timestamp = Date.now()
    let portFound = false
    while (!portFound) {
        if (timestamp + timeout < Date.now()) {
            reject(`port ${port} timed out after ${timeout} ms`)
        }
        const req = http.request({ port }, res => res.on('data', () => (portFound = true)))

        req.on('error', err => { })
        req.end()
        await wait(100)
    }
    return portFound
}
module.exports = { backgroundSpawn, killBackgroundProcess, checkPort }