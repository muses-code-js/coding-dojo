function fizzbuzz(number){
  if (isNaN(number)) {
    return null;
  } 
  if(number % 15 == 0){
    return 'fizzbuzz';
  } else if(number % 5 == 0) {
    return 'buzz';
  } else if(number % 3 ==0) {
    return 'fizz';
  } else {
    return number;
  }
 }

 function printLines (num) {
  return '';
 }

module.exports= {
  fizzbuzz, printLines 
}