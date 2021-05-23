/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    type: 'bundler',
    configs: () => ({
        packagejson: require('./package.json'),
    }),
    hooks: {
        afterPatch: ctx => {
            const parts = ctx.parseImports(ctx.stringify(ctx.configs.svelte))
            ctx.writeTo(
                'svelte.config.js',
                `
                    ${parts.imports.join('\n')}
                    ${parts.declarations.join('\n')}
                    const production = process.env.NODE_ENV === 'production'
                    module.exports = ${parts.body}
                `,
            )
        },
    },
}
