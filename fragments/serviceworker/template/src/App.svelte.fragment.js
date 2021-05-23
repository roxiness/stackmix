module.exports.patch = ({ placeholders }) => {
    placeholders.imports.push(
        'import Serviceworker from "./components/Serviceworker.svelte"',
    )
    placeholders.html.push('<Serviceworker />')
}
