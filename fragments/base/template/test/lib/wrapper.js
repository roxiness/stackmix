const { spawnSync, spawn } = require('child_process')
const { checkPort, wait } = require('./')
const fkill = require('fkill')
const { port } = require('../../package.json').appConfig
const timeout = 15000 // 15s

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx'


// assign `dev` or `build` to mode and `ava` to cmd
const [mode, cmd, ...args] = process.argv.slice(2)

const setups = {
    async dev() {
        console.log('[app] test dev')
        const child = await spawn(npm, ['run', 'dev'])
        const teardown = () => fkill(child.pid, { tree: true, force: true })
        
        const ready = await checkPort(port, timeout)
        if (ready) {
            await wait(500)
            return teardown
        } else {            
            teardown()
            throw Error(`dev on port ${port} timed out after ${timeout} ms`)
        }
    },
    async build() {
        console.log('[app] test build')
        spawnSync(npm, ['run', 'build'],)
        const child = await spawn(npm, ['run', 'serve'])        
        const teardown = () => fkill(child.pid, { tree: true, force: true })
        
        if (await checkPort(port, timeout))
            return teardown
        else {
            teardown()
            throw Error(`build on port ${port} timed out after ${timeout} ms`)
        }
    }
}

async function wrapSpawn() {
    const teardown = await setups[mode]()
    spawnSync(npx, [cmd, ...args], { stdio: 'inherit' })
    teardown()
}

wrapSpawn()
