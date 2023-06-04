const uniqueString = require('./unique-string')


describe('uniqueString', () => {
    test('test 1', () => {
        expect(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])).toBe('BbBb')
    })
    test('test 2', () => {
        expect(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])).toBe('foo')
    })
    test('test 3', () => {
        expect(uniqueString([ 'silvia', 'vasili', 'victor' ])).toBe('victor')
    })
    test('test 4', () => {
        expect(uniqueString([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])).toBe('Harry Potter')
    })
    test('test 5', () => {
        expect(uniqueString([ '    ', 'a', ' ' ])).toBe('a')
    })
})