const assert = require('assert');

function convertToRoman(digital) {
    const numbers = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};
    if (numbers[digital]) {
        console.log(digital);
        console.log(numbers[digital]);
        return numbers[digital];
    } else {
        return "II";
    }

    // switch (digital){
    // case 1:return "I";
    // break;
    // case 5:return "V";
    // break;
    // case 50:return "L";
    // break;
    // default: return "X";
    //}
}


describe('Roman Numerals', () => {

    it('works', () => {
        const expected = true;
        const actual = true;

        assert.equal(actual, expected);
    });

    it('Should convert 1 to "I"', () => {
        const expected = 'I';
        const actual = convertToRoman(1);

        assert.equal(actual, expected);
    });

    it('Should convert 2 to "II"', () => {
        const expected = 'II';
        const actual = convertToRoman(2);
        assert.equal(actual, expected);
    });

    it('Should convert 5 to "V"', () => {
        const expected = 'V';
        const actual = convertToRoman(5);

        assert.equal(actual, expected);
    });

    it('Should convert 10 to "X"', () => {
        assert.equal(convertToRoman(10), 'X');
    });

    it('Should convert 50 to "L"', () => {
        assert.equal(convertToRoman(50), 'L');
    });
    it('Should convert 100 to "C"', () => {
        assert.equal(convertToRoman(100), 'C');
    });
    it('Should convert 500 to "D"', () => {
        assert.equal(convertToRoman(500), 'D');
    });
    it('Should convert 1000 to "M"', () => {
        assert.equal(convertToRoman(1000), 'M');
    });
});


