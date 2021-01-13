/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('./pageMacro')
const { spawn } = require('child_process')
const http = require('http')

test.before(async (t) => {
    const cmd = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
    const cwd = require('path').resolve(__dirname, '..')
    const stdio = 'inherit'
    spawn(cmd, ['run', 'dev'], { stdio, cwd })
    await checkPort(5000, 10000)
})

test('can run dev script', pageMacro, async (t, page) => {
    await page.goto('http://localhost:5000/')
    t.assert(await page.$('#routify-app'))
})



function checkPort(port, timeout) {
    return new Promise((resolve, reject) => {
        const timestamp = Date.now()
        const intervalHandle = setInterval(_checkPort, 500)

        function _checkPort() {
            console.log(`polling port ${port}`)
            if (timestamp + timeout < Date.now()) {
                clearInterval(intervalHandle)
                reject(`port ${port} timed out after ${timeout} ms`)
            }
            const reqOptions = {
                hostname: 'localhost',
                port,
                method: 'GET',
                path: '/'
            }
            const req = http.request(reqOptions, res => {
                res.on('data', () => {
                    console.log(`port ${port} is live`)
                    clearInterval(intervalHandle)
                    resolve('connected')
                })
            })
            req.end()
        }
    })

}