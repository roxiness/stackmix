const { spawnSync, spawn } = require('child_process')
const { checkPort, wait } = require('./')
const fkill = require('fkill')
const { port } = require('./config')

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx'

// assign `dev` or `build` to mode and `ava` to cmd
const [mode, cmd, ...args] = process.argv.slice(2)

const setups = {
  async dev() {
    console.log('[app] test dev')
    const child = await spawn(npm, ['run', 'dev'])
    await checkPort(port, 15000)
    await wait(500)
    return () => fkill(child.pid, { tree: true, force: true })
  },
  async build() {
    console.log('[app] test build')
    spawnSync(npm, ['run', 'build'])
    const child = await spawn(npm, ['run', 'serve'])
    await checkPort(port, 15000)
    return () => fkill(child.pid, { tree: true, force: true })
  },
}

async function wrapSpawn() {
  const teardown = await setups[mode]()
  spawnSync(npx, [cmd, ...args], { stdio: 'inherit' })
  teardown()
}

wrapSpawn()
