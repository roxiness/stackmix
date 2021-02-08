import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { removeSync } from 'fs-extra'
__IMPORTS__

const assetsDir = 'public'
const buildDir = `public/build`
const production = process.env['NODE_ENV'] === 'production';
__CONSTANTS__

// clear previous builds
removeSync(buildDir)
__LOGIC__

__FUNCTIONS__


export default __CONFIG__