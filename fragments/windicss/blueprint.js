// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    type: 'feature',
    imports: {
        svelteWindicss: ['svelte-windicss-preprocess', 'preprocess'],
    },
    configs: ({ getConfigString, $require }) => ({
        windicss: {
            compile: 'false',
            prefix: '"windi-"',
            globalPreflight: 'true',
            globalUtility: 'true',
        },
        svelte: {
            preprocess: [
                $require('svelteWindicss')(getConfigString('windicss')),
            ],
        },
        packagejson: require('./package.json'),
    }),
}
