const romanNumerals = require('./roman-numerals');


describe('romanNumerals', () => {
    test('To Roman 1000 => M', () => {
        expect(romanNumerals.toRoman(1000)).toBe('M')
    })
    test('To Roman 4 => IV', () => {
        expect(romanNumerals.toRoman(4)).toBe('IV')
    })
    test('To Roman 1 => I', () => {
        expect(romanNumerals.toRoman(1)).toBe('I')
    })
    test('To Roman 1990 => MCMXC', () => {
        expect(romanNumerals.toRoman(1990)).toBe('MCMXC')
    })
    test('To Roman 2008 => MMVIII', () => {
        expect(romanNumerals.toRoman(2008)).toBe('MMVIII')
    })
})

describe('romanNumerals', () => {
    test('From Roman XXI => 21', () => {
        expect(romanNumerals.fromRoman('XXI')).toBe(21)
    })
    test('From Roman XXI => 1', () => {
        expect(romanNumerals.fromRoman('I')).toBe(1)
    })
    test('From Roman IV => 4', () => {
        expect(romanNumerals.fromRoman('IV')).toBe(4)
    })
    test('From Roman MMVIII => 2008', () => {
        expect(romanNumerals.fromRoman('MMVIII')).toBe(2008)
    })
    test('From Roman MDCLXVI => 1666', () => {
        expect(romanNumerals.fromRoman('MDCLXVI')).toBe(1666)
    })
})