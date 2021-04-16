exports.patch = ({placeholders, configs, stringify}) => {   
    placeholders.body.push('<script type="module" src="/src/main.js"></script>')
}