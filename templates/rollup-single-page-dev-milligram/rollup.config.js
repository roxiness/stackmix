import { removeSync } from 'fs-extra'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'

const assetsDir = 'public'
const buildDir = `public/build`
const production = process.env['NODE_ENV'] === 'production'

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
      preprocess: [],
    }),
    resolve({
      browser: true,
      dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
    }),
    commonjs(),
    production && terser(),
    !production && livereload(assetsDir),
  ],
  watch: {
    clearScreen: false,
  },
}
