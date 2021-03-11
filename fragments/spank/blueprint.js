module.exports = {
    name: 'Spank (Static Site Generator)',
    type: 'feature',
    configs: ({ getConfig, stringify }) => ({
        packagejson: require('./package.json')
    })
}
