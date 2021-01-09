module.exports = {
    configs: ({ getConfig, stringify }) => ({
        svelte: {
            hot: 'isNollup',
        },
        rollup: {
            plugins: [
                `!production && isNollup && Hmr({ inMemory: true, public: assetsDir, }), // refresh only updated code`,
                '!production && !isNollup && livereload(distDir), // refresh entire window when code is updated',
            ],
        },
        packagejson: require('./template/package.json')
    }),
    events: {
        afterConfig: ({ configs }) => {
            
        },
        afterPatch: (({ transform }) => {
            transform('rollup.config.js', str => str.replace(/.*import svelte from.*/, ''))
        })
    }
}