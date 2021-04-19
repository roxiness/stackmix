
const { resolve } = require('path')

const combinations = [
    'rollup, scroll-navigation, dev, milligram',
    'rollup',
    'nollup',
    'nollup, spank, vercel',
    'nollup, docker-ssr, spank',
    'nollup, tailwindcss, spank',
    'snowpack',
    'rollup, i18n, navigation, content, milligram, markdown, auth'
]

combinations.forEach(fragments => {
    fragments = fragments.split(/, */)
    Object.keys(require.cache).forEach(key => delete require.cache[key])
    const dest = resolve('templates', fragments.join('-'))
    const { merge } = require('canvasit')
    merge(fragments, dest)
})