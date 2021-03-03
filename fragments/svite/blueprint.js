// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    imports: {'svelte': ['@svitejs/vite-plugin-svelte']},
    type: 'bundler',
    configs: ({ getConfigString, $require }) => ({
        packagejson: require('./package.json'),
        svelte: {
            emitCss: 'true',
            hot: '!production',
        },
        vite: {
            optimizeDeps: {
                exclude: ["'@roxi/routify'"]
            },
            plugins: [
                $require('svelte')(getConfigString('svelte'))
            ]
        }
    }),
    hooks: {
        afterPatch: ctx => {
            const sviteParts = ctx.parseImports(ctx.stringify(ctx.configs.vite))
            ctx.writeTo('vite.config.js',`
                    ${sviteParts.imports.join('\n')}
                    ${sviteParts.declarations.join('\n')}
                    const production = process.env.NODE_ENV === 'production'
                    module.exports = ${sviteParts.body}
                `
            )
        }
    }
}