module.exports = {
    configs: ({ getConfigString, getConfig, stringify }) => ({
        packagejson: require('./package.json'),
        autoPreprocess: {
            postcss: getConfig('postcss')
        },
        postcss: {}
    })
}