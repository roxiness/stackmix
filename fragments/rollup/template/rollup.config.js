import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { copySync, removeSync } from 'fs-extra'
import getConfig from '@roxi/routify/lib/utils/config'
__IMPORTS__

const { distDir } = getConfig() // use Routify's distDir for SSOT
const assetsDir = 'assets'
const buildDir = `dist/build`
const production = !process.env.ROLLUP_WATCH;
__CONSTANTS__

// clear previous builds
removeSync(distDir)
removeSync(buildDir)
__LOGIC__

__FUNCTIONS__
const copyToDist = () => ({ writeBundle() { copySync(assetsDir, distDir) } })

export default __CONFIG__