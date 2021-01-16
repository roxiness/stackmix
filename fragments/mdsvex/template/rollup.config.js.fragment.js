module.exports.patch = ({placeholders}) => {
    placeholders.imports.push(`import { mdsvex } from 'mdsvex'`)
    placeholders.imports.push(`import slug from 'remark-slug'`)
}