var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let firstRowMarker = false;
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowMarker = true;
    }
  }

  let firstColMarker = false;
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColMarker = true;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowMarker) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }
  if (firstColMarker) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
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
