const validBraces = require('./valid-braces');


describe('validBraces', () => {
    test('test 1', () => {
        expect(validBraces("(){}[]")).toBe(true)
    })
    test('test 2', () => {
        expect(validBraces("([{}])")).toBe(true)
    })
    test('test 3', () => {
        expect(validBraces("[({})](]")).toEqual(false)
    })
})