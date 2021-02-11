module.exports = {
    "basepath": "fragments",
    "ignore": [
        "node_modules",
        "dist",
        ".routify"
    ],
    "include": [
        "base"
    ],
    hooks: {
        init: require('./lib/selectFragments').selectFragments
    }
}
