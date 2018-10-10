function Number(number) {
  return {
    toString: () => number.toString()
  }
}

function OopsNumber() {
  return {
    toString: () =>  "Oops"
  }
}

function FizzBuzzNumber() {
  return {
    toString: () => "FizzBuzz"
  }
}

function FizzNumber() {
  return {
    toString: () => "Fizz"
  }
}

function BuzzNumber() {
  return {
    toString: () => "Buzz"
  }
}

function fizzbuzz(number = "") {
  if (number == ""){
    return new OopsNumber().toString();
  }

  if (number % 3 == 0 && number % 5 == 0) {
    return new FizzBuzzNumber().toString();
  } else if (number % 3 == 0) {
    return new FizzNumber().toString();
  } else if (number % 5 == 0) {
    return new BuzzNumber().toString();
  } return new Number(number).toString();
}

module.exports = fizzbuzz;
