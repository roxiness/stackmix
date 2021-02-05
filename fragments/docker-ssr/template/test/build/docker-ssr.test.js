/**
 * These tests require ava and playwright
 * To install:
 * npm install --save-dev ava playwright
 */

const test = require('ava')
const { pageMacro } = require('../pageMacro')
const { checkPort } = require('../utils')
const { spawnSync } = require('child_process')

test.before(async t => {
    const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
    spawnSync(npm, ['run', 'run:docker'], { stdio: 'inherit' })    
    await checkPort(80, 15000)
})

test('can create an image', pageMacro, async (t, page) => {
    await page.goto('http://localhost:80')
    t.assert(await page.waitForSelector('main'))
})

test.after(async t => {
    spawnSync('docker', ['rm', '--force', 'routify'])
})