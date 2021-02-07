module.exports = {
    dependencies: ['autoPreprocess'],
    configs: ({ getConfig }) => ({
        packagejson: require('./package.json'),
        autoPreprocess: {
            postcss: getConfig('postcss')
        },
        postcss: {}
    })
}