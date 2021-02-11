module.exports = {
    type: 'bundler',
    configs: ({ getConfigString, stringify }) => ({        
        packagejson: require('./template/package.json')
    }),
}