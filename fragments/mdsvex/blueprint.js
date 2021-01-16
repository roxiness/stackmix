module.exports = {
    configs: ({ getConfig, getConfigString, stringify }) => ({
        packagejson: {
            devDependencies: {
                mdsvex: '^0.8.9',
                "remark-slug": "^6.0.0",
            },
            routify: {
                extensions: ['md', 'svelte'],
                "plugins": {
                    "routify-plugin-frontmatter": {}
                }
            }
        },
        svelte: {
            extensions: ["'.md'", "'.svelte'"],
            preprocess: [
                `mdsvex(${getConfigString('mdsvex')})`
            ]
        },
        mdsvex: {
            remarkPlugins: ['slug'],
            layout: {
                blog: "'src/components/Card.svelte'"
            },
            extension: "'md'"
        }
    }),
}