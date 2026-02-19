/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let map = new Map();
  let n = grid.length * grid.length;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      map.set(grid[i][j], (map.get(grid[i][j]) || 0) + 1);
    }
  }
  let repeated = -1;
  let missing = -1;

  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      missing = i;
    }
    if (map.get(i) >= 2) {
      repeated = i;
    }
  }
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
