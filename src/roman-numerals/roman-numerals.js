const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};
class RomanNumerals {
    static toRoman(num) {
        let result = '';
        for (let key in romanNumerals) {
            while (num >= romanNumerals[key]) {
                result += key;
                num -= romanNumerals[key];
            }
        }
        return result;
    }

    static fromRoman(str) {
        let result = 0;
        let i = 0;
        while (i < str.length) {
            if (romanNumerals[str[i]] < romanNumerals[str[i + 1]]) {
                result += romanNumerals[str[i + 1]] - romanNumerals[str[i]];
                i += 2;
            } else {
                result += romanNumerals[str[i]];
                i++;
            }
        }
        return result;
    }
}

module.exports = RomanNumerals;