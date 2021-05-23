exports.patch = ({ placeholders, configs, stringify }) => {
    placeholders.style.push(`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;`)
}
