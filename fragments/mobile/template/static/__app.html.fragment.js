module.exports.patch = ({placeholders}) => {
    placeholders.head.push(
        '<link href="/mobile.css" rel="stylesheet">'
    )
}