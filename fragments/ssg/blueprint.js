module.exports = {
    type: 'feature',
    configs: ({ getConfig, stringify }) => ({
        packagejson: require('./template/package.json')
    })
}
