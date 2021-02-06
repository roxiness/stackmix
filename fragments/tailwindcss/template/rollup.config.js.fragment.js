exports.patch = ({ placeholders, configs, stringify }) => {
    placeholders.constants.push('process.env.NODE_ENV = production ? "production" : "development";')
    placeholders.config.push("plugins: [svelte({preprocess: [autoPreprocess({postcss: require('./postcss.config.js'),defaults: { style: 'postcss' }})]}),")
}