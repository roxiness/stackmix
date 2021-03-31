const prompts = require('prompts');
const { readdirSync } = require('fs');
const { resolve } = require('path');

const FRAGMENTS_PATH = resolve(__dirname, '..', 'fragments')

const TYPES = {
    bundler: { message: 'Pick a bundler. Combine at your own risk.' },
    template: { message: 'Pick a template. Combine at your own risk.' },
    feature: { message: 'Pick features.' },
    content: { message: 'Pick content.' },
}

const getBlueprintFromPath = (fragment) => ({
    path: fragment,
    ...require(resolve(FRAGMENTS_PATH, fragment, 'blueprint.js'))
})

const groupBlueprintsByType = (types, fragment) => {
    if (fragment.type !== 'base') {
        const type = fragment.type || 'other'
        types[type] = types[type] || {}
        types[type].fragments = types[type].fragments || []
        types[type].fragments.push(fragment)
    }
    return types
}

const promptFragments = async () => {
    const fragmentPaths = []
    const fragmentByTypes = readdirSync(FRAGMENTS_PATH)
        .map(getBlueprintFromPath)
        .reduce(groupBlueprintsByType, TYPES)

    for (const [name, type] of Object.entries(fragmentByTypes)) {
        const result = await prompts({
            name: 'fragmentPaths',
            type: 'multiselect',
            instructions: false,
            message: type.message || 'Misc',
            choices: type.fragments.map(({ name, path, default: selected }) => ({ title: name || path, value: path, selected })),
        })
        fragmentPaths.push(...result.fragmentPaths)
    }
    return fragmentPaths
}

module.exports = { promptFragments }