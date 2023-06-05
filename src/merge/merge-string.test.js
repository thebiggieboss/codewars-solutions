const mergeString = require('./merge-string')
const tasks = [
    {
        input: ['xcyc', 'cy', 'xc'],
        output: true
    },
    {
        input: ['codewars', 'cdwr', 'oeas'],
        output: true
    },
    {
        input: ['codewars', 'code', 'wasr'],
        output: false
    },
    {
        input: ["Bananas from Bahamas", "Bahas", "Bananas from am"],
        output: true
    },
]
describe('mergeString', () => {
    for(let i = 0; i < tasks.length; i++) {
        const [s, part1, part2]= tasks[i].input
        test(`test ${i}`, () => {
            expect(mergeString(s, part1, part2)).toEqual(tasks[i].output)
        })
    }
})