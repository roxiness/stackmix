module.exports = {
    type: 'base',
    configs: () => ({
        test: {},
        svelte: {
            // Extract component CSS — better performance
            // css: "css => css.write(`bundle.css`)",
            preprocess: []
        },
        packagejson: require('./package.json')
    }),
    hooks: {
        afterPatch: ctx => {
            ctx.writeTo('package.json', JSON.stringify(ctx.configs.packagejson, null, 2))
        }
    }
}