module.exports = {
    type: 'feature',
    dependencies: ['postcss'],
    imports: {
        tailwind: ['tailwindcss'],
        postcssImport: ['postcss-import']
    },
    configs: ({ getConfigString, getConfig, $require }) => ({
        packagejson: require('./package.json'),
        autoPreprocess: {
            postcss: getConfig('postcss')
        },

        tailwindcss: {
            darkMode: "'class'",
            future: {
                removeDeprecatedGapUtilities: "true",
                purgeLayersByDefault: "true",
            },
            plugins: [],
            purge: {
                content: ["'./src/**/*.svelte'"],
                enabled: "production",
            },
        },
        postcss: {
            plugins: [
                $require('tailwind')(getConfigString('tailwindcss')),
                $require("postcssImport")
            ]
        },
    }),
    hooks: {
        beforeConfig(ctx) {
            ctx.prompt
        }
    }
}