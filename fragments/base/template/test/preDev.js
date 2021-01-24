const { backgroundSpawn, checkPort } = require('./utils')
const cmd = /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
const cwd = require('path').resolve(__dirname, '..');

(async () => {    
    await backgroundSpawn(cmd, ['run', 'dev'], { cwd })
    await checkPort(5000, 15000)
})()
