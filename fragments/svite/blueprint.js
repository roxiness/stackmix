// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    imports: {
        svelte: ['@svitejs/vite-plugin-svelte'],
        resolve: ['path', 'resolve'],
        port: ['./package.json', 'appConfig', 'port']
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
                port: $require('port')
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
            delete (ctx.configs.packagejson.appConfig.script)
            delete (ctx.configs.packagejson.spassr)
            delete (ctx.configs.packagejson.spank)
        },
        afterPatch: ctx => {
            ctx.moveFile('static/__app.html', 'index.html')
            ctx.moveFile('static', 'public')
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