module.exports = {
    dependencies: ['postcss'],
    configs: ({ getConfigString, getConfig, stringify }) => ({
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
                `require("tailwindcss")(${getConfigString('tailwindcss')})`,
                'require("postcss-import")',
            ]
        },
    })
}