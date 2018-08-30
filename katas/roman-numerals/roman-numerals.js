

module.exports = function toRomanNumber(num) {

  const romanNums = {
    1: 'I',
    2: 'II',
    3: 'III',

    5: 'V',
    6: 'VI',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  const arabicNums = Object.keys(romanNums);
  let i = arabicNums.length - 1;
  let roman = "";
  while (i >= 0){
    if (parseInt(arabicNums[i]) > num) {
      i = i-1;
    }
    else {
      roman += romanNums[arabicNums[i]];
      num = num % parseInt(arabicNums[i]);
    }
  }


  return roman;


}
