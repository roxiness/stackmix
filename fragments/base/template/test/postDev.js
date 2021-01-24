const { killBackgroundProcess } = require('./utils')

postDev()

async function postDev() {
    await killBackgroundProcess()
}