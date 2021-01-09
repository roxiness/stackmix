exports.patch = ({placeholders, configs, stringify}) => {   
    placeholders.constants.push('const isNollup = !!process.env.NOLLUP')
    placeholders.imports.push("import svelte from 'rollup-plugin-svelte-hot'")
    placeholders.imports.push("import Hmr from 'rollup-plugin-hot'")
}