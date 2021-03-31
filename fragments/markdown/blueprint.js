module.exports = {
    default: true,
    type: 'feature',
    imports: {
        mdsvex: ['mdsvex', 'mdsvex'],
        slug: ['remark-slug']
    },
    configs: ({ getConfigString, $require }) => ({
        options: { base: { useMarkdown: true } },
        packagejson: require('./package.json'),
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