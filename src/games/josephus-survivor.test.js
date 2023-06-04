const josephusSurvivor = require('./josephus-survivor');

describe('josephusSurvivor', () => {
    test('test 1', () => {
        expect(josephusSurvivor(7,3)).toBe(4)
    })
    test('test 2', () => {
        expect(josephusSurvivor(11,19)).toBe(10)
    })
    test('test 3', () => {
        expect(josephusSurvivor(14,2)).toBe(13)
    })
})