// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    imports: {
        svelte: ['@svitejs/vite-plugin-svelte'],
        resolve: ['path', 'resolve']
    },
    type: 'bundler',
    configs: ({ getConfigString, $require }) => ({
        packagejson: require('./package.json'),
        svelte: {
            emitCss: 'true',
            hot: '!production',
        },
        vite: {
            server: {
                port: "5000"
            },
            build: {
                polyfillDynamicImport: "false",
                cssCodeSplit: "false"
            },
            optimizeDeps: {
                exclude: ["'@roxi/routify'"]
            },
            resolve: {
                dedupe: ["'@roxi/routify'"],
                alias: {
                    svelte: $require('resolve')(`__dirname, "node_modules/svelte"`),
                },
            },
            plugins: [
                $require('svelte')(getConfigString('svelte'))
            ]
        }
    }),
    hooks: {
        afterConfig: ctx => {
            delete (ctx.configs.packagejson.spassr)
            delete (ctx.configs.packagejson.spank)
        },
        afterPatch: ctx => {
            ctx.moveFile('public/__app.html', 'index.html')
            const sviteParts = ctx.parseImports(ctx.stringify(ctx.configs.vite))
            ctx.writeTo('vite.config.js', `
                    ${sviteParts.imports.join('\n')}
                    ${sviteParts.declarations.join('\n')}
                    const production = process.env.NODE_ENV === 'production'
                    module.exports = ${sviteParts.body}
                `
            )
        }
    }
}