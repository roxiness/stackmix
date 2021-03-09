
const { resolve } = require('path')

const combinations = [
    'rollup, single-page, dev, milligram',
    'rollup',
    'nollup',
    'nollup, static, vercel',
    'nollup, docker, static',
    'nollup, tailwindcss, static',
    'snowpack',
    'rollup, i18n, navigation, content, miligram, mdsvex, auth'
]

combinations.forEach(fragments => {
    fragments = fragments.split(/, */)
    Object.keys(require.cache).forEach(key => delete require.cache[key])
    const dest = resolve('templates', fragments.join('-'))
    const { merge } = require('canvasit')
    merge(fragments, dest)
})