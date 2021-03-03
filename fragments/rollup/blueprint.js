// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    type: 'bundler',
    imports: {
        svelte: ['rollup-plugin-svelte'],
        resolve: ['@rollup/plugin-node-resolve'],
        commonjs: ['@rollup/plugin-commonjs'],
        livereload: ['rollup-plugin-livereload'],
        terser: ['rollup-plugin-terser', 'terser'],
    },
    configs: ({ getConfigString, $require }) => ({
        rollupResolve: {
            browser: "true",
            dedupe: "importee => !!importee.match(/svelte(\\/|$)/)"
        },
        rollup: {
            preserveEntrySignatures: "false",
            input: ["`src/main.js`"],
            output: {
                sourcemap: "true",
                format: "'esm'",
                dir: "buildDir",
                // for performance, disabling filename hashing in development
                chunkFileNames: "`[name]${production && '-[hash]' || ''}.js`"
            },
            plugins: [
                $require('svelte')(getConfigString('svelte')),

                // resolve matching modules from current working directory
                $require('resolve')(getConfigString('rollupResolve')),
                $require('commonjs')(),

                `production && ${$require('terser')()}`,
                `!production && ${$require('livereload')('assetsDir')}`, // refresh entire window when code is updated`,
            ],
            watch: { clearScreen: "false" }
        },
        packagejson: require('./template/package.json')
    }),
}