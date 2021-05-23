module.exports = {
    type: 'feature',
    imports: {
        autoPreprocess: ['svelte-preprocess'],
    },
    configs: ({ getConfigString, $require }) => ({
        packagejson: require('./package.json'),
        svelte: {
            preprocess: [
                $require('autoPreprocess')(getConfigString('autoPreprocess')),
            ],
        },
        autoPreprocess: {
            /** config */
        },
    }),
}
