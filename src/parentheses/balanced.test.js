const balanced = require('./balanced');


describe('balanced', () => {
    test('test 1', () => {
        expect(balanced(0)).toContainEqual("")
    })
    test('test 2', () => {
        expect(balanced(1)).toContainEqual("()")
    })
    test('test 3', () => {
        expect(balanced(2)).toContainEqual("()()", "(())")
    })
    test('test 4', () => {
        expect(balanced(3)).toContainEqual("()()()","(())()","()(())","(()())","((()))")
    })
})