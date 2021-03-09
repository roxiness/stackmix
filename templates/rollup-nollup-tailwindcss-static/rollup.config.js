import { removeSync } from 'fs-extra'

import Hmr from 'rollup-plugin-hot'
import tailwind from 'tailwindcss'
import postcssImport from 'postcss-import'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import autoPreprocess from 'svelte-preprocess'
import svelte from 'rollup-plugin-svelte'

const assetsDir = 'public'
const buildDir = `public/build`
const production = process.env['NODE_ENV'] === 'production'
const isNollup = !!process.env.NOLLUP

// clear previous builds
removeSync(buildDir)

export default {
  preserveEntrySignatures: false,
  input: [`src/main.js`],
  output: {
    sourcemap: true,
    format: 'esm',
    dir: buildDir,
    chunkFileNames: `[name]${(production && '-[hash]') || ''}.js`,
  },
  plugins: [
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [
              tailwind({
                darkMode: 'class',
                future: {
                  removeDeprecatedGapUtilities: true,
                  purgeLayersByDefault: true,
                },
                plugins: [],
                purge: {
                  content: ['./src/**/*.svelte'],
                  enabled: production,
                },
              }),
              postcssImport,
            ],
          },
        }),
      ],
      hot: isNollup,
    }),
    resolve({
      browser: true,
      dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
    }),
    commonjs(),
    production && terser(),
    !production && livereload(assetsDir),
    !production && isNollup && Hmr({ inMemory: true, public: assetsDir }), // refresh only updated code,
    !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100,
  },
}
