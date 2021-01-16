exports.patch = ({ placeholders, configs, stringify }) => {
    placeholders.script.push(`import { urlTransform } from './components/Lang.svelte'`)
}