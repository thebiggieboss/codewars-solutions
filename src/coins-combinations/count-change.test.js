const countChange = require('./count-change');

describe('countChange', () => {
    test('test 1', () => {
        expect(countChange(300, [5, 10, 20, 50, 100, 200, 500])).toBe(1022)
    })
    test('test 2', () => {
        expect(countChange(11, [5, 7])).toBe(0)
    })
    test('test 3', () => {
        expect(countChange(4, [1, 2])).toBe(3)
    })
})