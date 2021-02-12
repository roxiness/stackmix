module.exports = {
    type: 'bundler',
    configs: ({ getConfigString, stringify }) => ({
        packagejson: require('./package.json'),
        svelte: {
            emitCss: 'true',
            hot: '!production',
        },
        vite: {
            optimizeDeps: {
                exclude: ["'@roxi/routify'"]
            },
            plugins: [
                `svelte(${getConfigString('svelte')})`
            ]
        }
    }),
}