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
        buildDir: ['./package.json', 'appConfig', 'buildDir'],
        distDir: ['./package.json', 'appConfig', 'distDir'],
    },
    configs: ({ getConfigString, $require }) => ({
        test: {
            domain: "'localhost'",
            port: '5000',
        },
        rollupResolve: {
            browser: 'true',
            dedupe: 'importee => !!importee.match(/svelte(\\/|$)/)',
        },
        rollup: {
            preserveEntrySignatures: 'false',
            input: ['`src/main.js`'],
            output: {
                sourcemap: 'true',
                format: "'esm'",
                dir: $require('buildDir'),
                // for performance, disabling filename hashing in development
                chunkFileNames: "`[name]${production && '-[hash]' || ''}.js`",
            },
            plugins: [
                $require('svelte')(getConfigString('svelte')),

                // resolve matching modules from current working directory
                $require('resolve')(getConfigString('rollupResolve')),
                $require('commonjs')(),

                `production && ${$require('terser')()}`,
                `!production && ${$require('livereload')(
                    $require('distDir'),
                )} , // refresh entire window when code is updated`,
            ],
            watch: { clearScreen: 'false' },
        },
        packagejson: require('./template/package.json'),
    }),
}
