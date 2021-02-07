module.exports = {
    configs: ({ getConfigString, getConfig, stringify }) => ({
        packagejson: require('./package.json'),
        svelte: {
            preprocess: [
                `autoPreprocess(${getConfigString('autoPreprocess')})`//todo use autoPreprocess as param
            ]
        },
        autoPreprocess: {
            
        },
    })
}