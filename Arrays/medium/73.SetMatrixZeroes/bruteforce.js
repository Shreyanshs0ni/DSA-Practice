var setZeroes = function (matrix) {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (let i of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0;
    }
  }
  for (let j of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
);
