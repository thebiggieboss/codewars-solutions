const bigNumber = require('./big-number');


describe('bigNumber', () => {
    test('test 1', () => {
        expect(bigNumber("101", "100")).toBe('201')
    })
    test('test 2', () => {
        expect(bigNumber('63829983432984289347293874', '90938498237058927340892374089')).toBe("91002328220491911630239667963")
    })
    test('test 3', () => {
        expect(bigNumber("1372", "69")).toBe('1441')
    })
})