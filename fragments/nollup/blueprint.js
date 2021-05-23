// @ts-check

/** @type {import('canvasit')['Blueprint']} */
module.exports = {
    name: 'rollup + nollup',
    type: 'bundler',
    dependencies: ['rollup'],
    imports: {
        assetsDir: ['./package.json', 'appConfig', 'assetsDir'],
        buildDir: ['./package.json', 'appConfig', 'buildDir'],
        distDir: ['./package.json', 'appConfig', 'distDir'],
        port: ['./package.json', 'appConfig', 'port'],
        template: ['./package.json', 'appConfig', 'template'],
        relative: ['path', 'relative'],
        svelte: ['rollup-plugin-svelte-hot'],
        Hmr: ['rollup-plugin-hot'],
    },
    configs: ({ $require }) => {
        return {
            nollup: {
                hot: 'true',
                contentBase: $require('assetsDir') + ', // static',
                publicPath:
                    $require('relative')(
                        $require('distDir') + ', ' + $require('buildDir'),
                    ) + ', // build',
                historyApiFallback:
                    $require('relative')(
                        $require('assetsDir') + ', ' + $require('template'),
                    ) + ', // __app.html',
                port: $require('port'),
            },
            rollup: {
                plugins: [
                    `!production && isNollup && ${$require(
                        'Hmr',
                    )}({ inMemory: true, public: ${$require(
                        'assetsDir',
                    )}, }), //, refresh only updated code`,
                    '!production && !isNollup && livereload(distDir), // refresh entire window when code is updated',
                ],
                watch: {
                    clearScreen: 'false',
                    buildDelay: '100',
                },
            },
            packagejson: require('./template/package.json'),
        }
    },
    hooks: {
        afterPatch: ({ transform }) => {
            // remove unconditional livereload. We only want it when nollup isn't running
            transform('rollup.config.js', str =>
                str.replace(/.*'!production && livereload\\(distDir\\)'.*/, ''),
            )
        },
    },
}
