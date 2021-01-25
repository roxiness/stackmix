const http = require('http')
const wait = time => new Promise(resolve => setTimeout(resolve, time))

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
module.exports = { checkPort, wait }