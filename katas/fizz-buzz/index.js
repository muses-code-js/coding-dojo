
function fizzbuzz(number){
var divisible5 = number % 5 === 0;
var divisible3 = number % 3 === 0;
var includes5 = (number + "").includes("5");
var includes3 = (number + "").includes("3");
var isFizz = divisible3 || includes3;
var isBuzz = divisible5 || includes5;

    if (isNaN(number)) {
        return null;
    }
    if (isFizz && isBuzz) {
        return "FizzBuzz";
    }
    if (isFizz) {
        return "Fizz";
    }
    if (isBuzz) {
        return "Buzz";
    }


    return number;

}

function testFizzbuzz(range){
    for(i = 1; i <= range; ++i){
        console.log(fizzbuzz(i));
    }
}

module.exports = {
    fizzbuzz: fizzbuzz,
    testFizzbuzz: testFizzbuzz 
}