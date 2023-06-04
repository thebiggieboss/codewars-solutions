function validBraces(braces){
    const regex = /\(\)|\[\]|\{\}/
    return regex.test(braces) ? validBraces(braces.replace(regex, '')) : '' === braces
}
module.exports = validBraces;