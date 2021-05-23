exports.patch = ({ placeholders, configs, stringify, $require }) => {
    placeholders.config.push(stringify(configs.rollup))
    placeholders.logic.push(`// clear previous builds`)
    placeholders.logic.push(`removeSync(${$require('distDir')})`)
    placeholders.constants.push(
        `const production = process.env['NODE_ENV'] === 'production'`,
    )
}
