const prompts = require('prompts');
const { readdirSync } = require('fs')

const TYPES = {
    bundler: { message: 'Pick a bundler. Combine at your own risk.' },
    template: { message: 'Pick a template. Combine at your own risk.' },
    feature: { message: 'Pick features.' },
    content: { message: 'Pick content.' },
}

async function init(ctx){
    ctx.prompts = prompts
    await selectFragments(ctx)
}

async function selectFragments(ctx) {
    if (!ctx.paths.length) {
        const fragmentPaths = []
        const fragmentByTypes = readdirSync('fragments')
            .map(getBlueprintFromPath)
            .reduce(groupBlueprintsByType, TYPES)

        for (const [name, type] of Object.entries(fragmentByTypes)) {
            const result = await prompts({
                name: 'fragmentPaths',
                type: 'multiselect',
                instructions: false,
                message: type.message || 'Misc',
                choices: type.fragments.map(({ name, path }) => ({ title: name || path, value: path })),
            })
            fragmentPaths.push(...result.fragmentPaths)
        }
        ctx.paths.push(...fragmentPaths)
    }
}

function getBlueprintFromPath(fragment) {
    return {
        path: fragment,
        ...require(`../fragments/${fragment}/blueprint.js`)
    }
}

function groupBlueprintsByType(types, fragment) {
    if (fragment.type !== 'base') {
        const type = fragment.type || 'other'
        types[type] = types[type] || {}
        types[type].fragments = types[type].fragments || []
        types[type].fragments.push(fragment)
    }
    return types
}

module.exports = { init }