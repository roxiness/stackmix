module.exports.patch = (({ placeholders, configs }) => {
    placeholders.script.push(`import Lang from '../components/Lang.svelte'`)
    placeholders.navigation.push(`<div><Lang /></div>`)
})