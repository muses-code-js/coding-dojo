const assert = require("assert");

//Implementation
const drawChessBoard = (a, b) => {
  let board = "";
  for (j = 1; j <= b; j++) {
    //   if (j % 2 === 0) {
    //     for (i = 1; i <= a; i++) {
    //       if (i % 2 === 0) {
    //         board = board + "-";
    //       } else {
    //         board = board + "*";
    //       }
    //     }
    //   } else {
    //     for (i = 1; i <= a; i++) {
    //       if (i % 2 === 0) {
    //         board = board + "*";
    //       } else {
    //         board = board + "-";
    //       }
    //     }
    //   }
    for (i = 1; i <= a; i++) {
      if ((i + j) % 2 === 0) {
        board = board + "-";
      } else {
        board = board + "*";
      }
    }
    if (j !== b) {
      board += "\n";
    }
    console.log("interation code:", board);
  }
  console.log("final code:", board);

  return board;
};

//Test
describe("Chess Board", () => {
  it("First characters", () => {
    const expected = "-";
    const actual = drawChessBoard(1, 1);
    assert.equal(actual, expected);
  });

  it("Two first characters", () => {
    const expected = "-*";
    const actual = drawChessBoard(2, 1);
    assert.equal(actual, expected);
  });

  it("Eight first characters", () => {
    const expected = "-*-*-*-*";
    const actual = drawChessBoard(8, 1);
    assert.equal(actual, expected);
  });

  it("Two rows and 8 columns board", () => {
    const expected = "-*-*-*-*\n*-*-*-*-";
    const actual = drawChessBoard(8, 2);
    assert.equal(actual, expected);
  });

  it("8 rows and 8 columns board", () => {
    const expected =
      "-*-*-*-*\n" +
      "*-*-*-*-\n" +
      "-*-*-*-*\n" +
      "*-*-*-*-\n" +
      "-*-*-*-*\n" +
      "*-*-*-*-\n" +
      "-*-*-*-*\n" +
      "*-*-*-*-";
    const actual = drawChessBoard(8, 8);
    assert.equal(actual, expected);
  });
});
