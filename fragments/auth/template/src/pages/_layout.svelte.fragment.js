module.exports.patch = ({ placeholders, configs }) => {
    placeholders.script.push(
        `import Link from '../components/Auth/Link.svelte'`,
    )
    placeholders.navigation.push(`<div>
        <Link />
    </div>`)
}
