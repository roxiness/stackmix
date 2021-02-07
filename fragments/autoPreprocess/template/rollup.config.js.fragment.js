module.exports.patch = (({ placeholders }) => {
    placeholders.imports.push('import autoPreprocess from "svelte-preprocess"')
})