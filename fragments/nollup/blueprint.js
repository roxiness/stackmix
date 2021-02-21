module.exports = {
    name: 'rollup + nollup',
    type: 'bundler',
    dependencies: ['rollup'],
    configs: ({ getConfig, stringify }) => ({
        svelte: {
            hot: 'isNollup',
        },
        rollup: {
            plugins: [
                `!production && isNollup && Hmr({ inMemory: true, public: assetsDir, }), // refresh only updated code`,
                '!production && !isNollup && livereload(distDir), // refresh entire window when code is updated',
            ],
            watch: {
                clearScreen: 'false',
                buildDelay: '100',
            }
        },
        packagejson: require('./template/package.json')
    }),
    hooks: {
        afterPatch: (({ transform }) => {
            transform('rollup.config.js', str => str.replace(/.*import svelte from.*/, ''))
        })
    }
}