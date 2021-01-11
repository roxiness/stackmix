
const { resolve } = require('path')

const combinations = [
    ['rollup'],
    ['rollup', 'nollup'],
    ['snowpack']
]

combinations.forEach(fragments => {
    Object.keys(require.cache).forEach(key => delete require.cache[key])
    const dest = resolve('templates', fragments.join('-'))
    const { merge } = require('canvasit')
    merge(fragments, dest)
})