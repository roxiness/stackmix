// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    type: 'base',
    configs: () => ({
        options: { base: { useMarkdown: false } },
        test: {},
        svelte: {
            // Extract component CSS — better performance
            // css: "css => css.write(`bundle.css`)",
            preprocess: []
        },
        packagejson: require('./package.json')
    }),
    hooks: {
        afterPatch: async ctx => {
            ctx.writeTo('package.json', JSON.stringify(ctx.configs.packagejson, null, 2))
            if (!ctx.configs.options.base.useMarkdown)
                await ctx.fileWalker(convertMarkdownToSvelte)
        }
    }
}


function convertMarkdownToSvelte(file) {
    if (file.ext === 'md') {
        const md = require('markdown-it')({ html: true })
        file.content = md.render(file.content)
        file.remove()
        file.filepath = file.filepath.replace(/\..+?$/, '.svelte')
        file.save()
    }
}