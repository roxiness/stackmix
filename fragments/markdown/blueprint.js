module.exports = {
    type: 'feature',
    imports: {
        mdsvex: ['mdsvex', 'mdsvex'],
        slug: ['remark-slug']
    },
    configs: ({ getConfigString, $require }) => ({
        packagejson: {
            devDependencies: {
                mdsvex: '^0.8.9',
                "remark-slug": "^6.0.0",
                "routify-plugin-frontmatter": "^1.0.1",
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
            preprocess: [$require('mdsvex')(getConfigString('mdsvex'))
            ]
        },
        mdsvex: {
            remarkPlugins: [$require('slug')],
            layout: {
                blog: "'src/components/Card.svelte'"
            },
            extension: "'md'"
        }
    }),
}