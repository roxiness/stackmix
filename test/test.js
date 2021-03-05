const prompts = require('prompts');
const { readdirSync, writeFileSync, readFileSync } = require('fs')
const { resolve } = require('path')
const { spawnSync, spawn, execSync } = require('child_process')



const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const canvasit = /^win/.test(process.platform) ? 'canvasit.cmd' : 'canvasit'
const npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx'
const stdio = 'inherit'

const workspace = resolve('test', 'workspace')
writeFileSync(resolve(workspace, 'package.json'), '{"workspaces": ["*"]}')


const fragmentCombos = [
    'rollup,auth,content,i18n,miligram,markdown,static',
    'snowpack'
]

const children = fragmentCombos.map(async combo => {
    const name = combo.replace(/,/g, '-')
    const outputDir = resolve('test', 'workspace', name)
    const templatePkgJsonPath = resolve(outputDir, 'package.json')
    const child = spawn(npx, ['canvasit', '-output', outputDir, '-fragments', combo], { stdio })
    await new Promise(resolve => child.on('close', resolve))
    const pkgjson = require(templatePkgJsonPath)
    pkgjson.name = `test-${name}`
    writeFileSync(templatePkgJsonPath, JSON.stringify(pkgjson, null, 2))
    console.log(combo)
})

Promise.all(children).then(() => {
    console.log('installing dependencies')
    spawnSync(npm, ['install'], { cwd: resolve('test', 'workspace'), stdio })
    for (combo of fragmentCombos) {
        spawnSync(npm, ['test'], { cwd: resolve('test', 'workspace', combo.replace(/,/g, '-')), stdio })
    }
})



// canvasit -output output