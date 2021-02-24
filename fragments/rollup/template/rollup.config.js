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

__ESM__