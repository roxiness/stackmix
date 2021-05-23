exports.patch = ({ placeholders, configs, stringify }) => {
    placeholders.config.push(stringify(configs.nollup))
}
