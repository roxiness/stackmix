module.exports.patch = ({ placeholders, config, stringify }) => {
    placeholders.append('welcome')
    placeholders.welcome.push(`
        <h1>App?!</h1>
        <p>
          A short introduction would have been nice here...
        </p>
    `)
}