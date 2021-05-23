module.exports = {
    type: 'feature',
    configs: ({ getConfig, stringify }) => ({
        packagejson: {
            devDependencies: {
                'workbox-cli': '^6.1.0',
                esbuild: '^0.8.42',
            },
            scripts: {
                'build:pwa-bundle':
                    'esbuild --bundle src/sw.js --outfile=public/sw.generated.js --define:process.env.NODE_ENV="\'production\'"',
                'build:pwa-inject': 'workbox injectManifest',
            },
        },
    }),
    hooks: {
        afterPatch: ctx => {
            ctx.writeTo(
                'package.json',
                JSON.stringify(ctx.configs.packagejson, null, 2),
            )
        },
    },
}
