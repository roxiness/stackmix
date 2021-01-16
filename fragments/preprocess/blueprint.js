module.exports = {
    configs: ({ getConfig, getConfigString, stringify }) => ({
        packagejson: {
            devDependencies: {
                mdsvex: 'latest'
            },
            routify: {
                extensions: ['md', 'svelte'],
                "plugins": {
                    "routify-plugin-frontmatter": {}
                }
            }
        },
        svelte: {
            extensions: ["'.md'", "'.svelte'"]
        },
        mdsvex: {
            remarkPlugins: ['slug'],
            layout: {
                blog: "'src/components/Card.svelte'"
            },
            extension: "'md'"
        },
        sveltePreprocess: [
            `mdsvex(${getConfigString('mdsvex')})`
        ]
    }),
}