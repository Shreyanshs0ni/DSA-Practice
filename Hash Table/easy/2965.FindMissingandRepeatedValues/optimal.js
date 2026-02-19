//optimal space complexity
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let n = grid.length;
  let total = n * n;

  let expectedSum = (total * (total + 1)) / 2;
  let expectedSquareSum = (total * (total + 1) * (2 * total + 1)) / 6;

  let actualSum = 0;
  let actualSquareSum = 0;

  for (let row of grid) {
    for (let num of row) {
      actualSum += num;
      actualSquareSum += num * num;
    }
  }

  let sumDiff = actualSum - expectedSum;
  let squareDiff = actualSquareSum - expectedSquareSum;

  let sumPlus = squareDiff / sumDiff;

  let repeated = (sumDiff + sumPlus) / 2;
  let missing = repeated - sumDiff;

  return [repeated, missing];
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ]),
); //[2,4]

console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ]),
); //[9,5]
