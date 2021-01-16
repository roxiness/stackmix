exports.patch = ({ placeholders, configs, stringify }) => {
    const config = configs.routifyRuntime
    if (config) {
        placeholders.script.push(`const config = ${stringify(config)}`)
        placeholders.html.push(`<Router {routes} {config} />`)
    } else
        placeholders.html.push(`<Router {routes}  />`)
}