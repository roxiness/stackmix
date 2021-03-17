module.exports = {
    type: 'feature',
    dependencies: ['autoPreprocess'],
    configs: ({ getConfig }) => ({
        packagejson: require('./package.json'),
        autoPreprocess: {
            postcss: getConfig('postcss')
        },
        postcss: {
            plugins: []
        }
    })
}