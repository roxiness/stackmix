const prompts = require('prompts');
const { writeFileSync, existsSync, mkdirSync, rmdirSync, readdirSync, statSync } = require('fs')
const { resolve } = require('path')
const { spawnSync, spawn, execFileSync, execSync } = require('child_process')




const fragmentCombos = [
    'rollup,auth,content,i18n,milligram,markdown,spank',
    'svite',
    'nollup',
    'snowpack'
]



const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const npx = /^win/.test(process.platform) ? 'npx.cmd' : 'npx'
const stdio = 'inherit'

const workspaceDir = resolve(__dirname, 'workspace')
removeTemplatesFromWorkspaceDir(workspaceDir)
writeFileSync(resolve(workspaceDir, 'package.json'), '{"workspaces": ["*"]}')


const children = fragmentCombos.map(async combo => {
    const name = combo.replace(/,/g, '-')
    const outputDir = resolve(__dirname, 'workspace', name)
    const templatePkgJsonPath = resolve(outputDir, 'package.json')
    const child = spawn(npx, ['canvasit', '-output', outputDir, '-fragments', combo], { stdio })
    await new Promise(resolve => child.on('close', resolve))
    const pkgjson = require(templatePkgJsonPath)
    pkgjson.name = `test-${name}`
    writeFileSync(templatePkgJsonPath, JSON.stringify(pkgjson, null, 2))
    console.log(`[test] testing combos:`, combo)
})

Promise.all(children).then(() => {
    console.log('[test] installing dependencies')
    execSync('npm install', { cwd: workspaceDir, stdio })
    console.log('[test] installed')
    for (combo of fragmentCombos) {
        spawnSync(npm, ['test'], { cwd: resolve('test', 'workspace', combo.replace(/,/g, '-')), stdio })
    }
})


function removeTemplatesFromWorkspaceDir(dir) {
    if (existsSync(dir)) {
        readdirSync(dir)
            .filter(file => file !== 'node_modules')
            .map(file => resolve(dir, file))
            .filter(filepath => statSync(filepath).isDirectory())
            .forEach(filepath => rmdirSync(filepath, { recursive: true }))
    }
    else
        mkdirSync(file)
}