exports.patch = ({placeholders, configs, stringify}) => {   
    placeholders.constants.push('const isNollup = !!process.env.NOLLUP')
}