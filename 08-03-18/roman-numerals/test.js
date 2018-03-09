function converter(number) {
  let result = '';
  let roman = 'I';
  if (number <= 3) {
    for (cnt = 0; cnt < number; cnt++) {
      result = result + roman;
    }
  } else if (number === 4){
    result = "IV";
  } else if (number === 5){
    result = "V";
  } else if (number <= 6 || number <=8) {
    result = "V";
    for (cnt = 5; cnt < number; cnt++) {
      result = result + roman;
    }
  }
  return result;
}

describe("Roman Numerals", () => {
  it("returns I when number is 1", () => {
    expect(converter(1)).toEqual("I");
  });

  it("returns III when number is 3", () => {
    expect(converter(3)).toEqual("III");
  });

  it("returns V when number is 5", () => {
    expect(converter(5)).toEqual("V");
  });

  it("returns II when number is 2", () => {
    expect(converter(2)).toEqual("II");
  });

  it("returns IV when number is 4", () => {
    expect(converter(4)).toEqual("IV");
  });

  it("returns VII when number is 7", () => {
    expect(converter(7)).toEqual("VII");
  });
});
