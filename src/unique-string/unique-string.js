function findUniq(arr) {
    let sort = arr.map(item => {
        const myArray = item.toLowerCase().split('')
        return [...new Set(myArray)]
    })
    const counts = sort.flat().reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
    const uniqueAlp = sort.flat().filter(str => counts[str] === 1)
    let result = arr.filter(item => uniqueAlp.some(el => (item.toLowerCase()).includes(el)))
    return String(result)
}
module.exports = findUniq;