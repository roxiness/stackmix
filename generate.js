const { merge } = require('canvasit')
const { resolve } = require('path')

const combinations = [
    ['rollup'],
    ['rollup', 'nollup']
]

combinations.forEach(fragments => {
    const dest = resolve('templates', fragments.join('-'))
    merge(fragments, dest)
})