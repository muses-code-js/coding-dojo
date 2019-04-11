const assert = require("assert");

function getSeconds(number) {
  return number % 2 === 0 ? "ON" : "OFF";
}

function getFiveHours(number) {
  switch (number / 5) {
    case 1:
      return "R000";
    case 2:
      return "RR00";
    case 3:
      return "RRR0";
    case 4:
      return "RRRR";
    default:
      return "0000";
  }
}

describe("Berlin Clock Kata", function() {
  it("given odd number return light off", () => {
    assert.equal(getSeconds(1), "OFF");
  });
  it("given even number return light on", () => {
    assert.equal(getSeconds(2), "ON");
  });

  it("Given number 1 return all lights off", () => {
    assert.equal(getFiveHours(1), "0000");
  });

  it("Given number 5 return light on", () => {
    assert.equal(getFiveHours(5), "R000");
  });
  it("Given number 10 return light on", () => {
    assert.equal(getFiveHours(10), "RR00");
  });
});
