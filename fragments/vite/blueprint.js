// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    default: true,
    imports: {
        svelte: ['@sveltejs/vite-plugin-svelte', 'svelte'],
        resolve: ['path', 'resolve'],
        port: ['./package.json', 'appConfig', 'port'],
        viteMainJs: ['vite-main-js'],
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
                port: $require('port'),
            },
            build: { 
                // remove this if you're not using tossr, spassr or spank
                polyfillModulePreload: 'false',
                cssCodeSplit: 'false'
            },
            optimizeDeps: {
                exclude: ["'@roxi/routify'"],
            },
            resolve: {
                dedupe: ["'@roxi/routify'"],
            },
            plugins: [
                $require('viteMainJs')(),
                $require('svelte')(getConfigString('svelte')),
            ],
        },
    }),
    hooks: {
        afterConfig: ctx => {
            delete ctx.configs.packagejson.spassr
            delete ctx.configs.packagejson.spank
        },
        afterPatch: ctx => {
            ctx.moveFile('static/__app.html', 'index.html')
            ctx.moveFile('static', 'public')
            const sviteParts = ctx.parseImports(ctx.stringify(ctx.configs.vite))
            ctx.writeTo(
                'vite.config.js',
                `
                    ${sviteParts.imports.join('\n')}
                    ${sviteParts.declarations.join('\n')}
                    const production = process.env.NODE_ENV === 'production'
                    module.exports = ${sviteParts.body}
                `,
            )
        },
    },
}
