const { spawnSync, spawn } = require('child_process')
const { checkPort, wait } = require('./')
const fkill = require('fkill')
const { port } = require('../../package.json').appConfig
const timeout = 15000 // 15s

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx'


// creates function with teardown script
const createTeardown = pid => () => fkill(pid, { tree: true, force: true })

const setups = {
  async dev() {    
    // run dev server
    const child = await spawn(npm, ['run', 'dev'])
        
    if (await checkPort(port, timeout)) {
      await wait(500)
      return createTeardown(child.pid)
    } else {
      createTeardown(child.pid)()
      throw Error(`dev on port ${port} timed out after ${timeout} ms`)
    }
  },
  async build() {    
    // build app
    spawnSync(npm, ['run', 'build'])
    
    // serve app
    const child = await spawn(npm, ['run', 'serve'])
    
    if (await checkPort(port, timeout)) {
        return createTeardown(child.pid)
    }
    else {
      createTeardown(child.pid)()
      throw Error(`build on port ${port} timed out after ${timeout} ms`)
    }
  },
}

// wrap the CLI command 
runCliCommand()

async function runCliCommand() {    
  // assign `dev` or `build` to mode and `ava` to cmd
  const [mode, cmd, ...args] = process.argv.slice(2)

  console.log(`[app] setup ${mode} test...`)
  const teardown = await setups[mode]()
  console.log(`[app] setup ${mode} test... Done.`)
  console.log(`[app] run: ${cmd} ${args.join(' ')}`)
  const {status} = spawnSync(npx, [cmd, ...args], { stdio: 'inherit' })
  console.log(`[app] teardown ${mode} test...`)
  teardown()
  console.log(`[app] teardown ${mode} test... Done.`)
  process.exit(status)
}

