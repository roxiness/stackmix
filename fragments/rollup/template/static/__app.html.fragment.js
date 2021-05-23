exports.patch = ({ placeholders, configs, stringify }) => {
    placeholders.head.push('<link rel="modulepreload" href="/build/main.js" />')
    placeholders.head.push(
        '<script type="module" src="/build/main.js"></script>',
    )
}
