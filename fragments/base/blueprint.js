module.exports = {
    type: 'base',
    configs: ({ getConfig, stringify }) => ({
        svelte: {
            dev: "!production", // run-time checks      
            // Extract component CSS — better performance
            // css: "css => css.write(`bundle.css`)",
            preprocess: []
        },
        packagejson: require('./template/package.json')
    }),
    events: {
        afterPatch: ctx=>{
            ctx.writeTo('package.json', JSON.stringify(ctx.configs.packagejson, null, 2))
        }
    }
}