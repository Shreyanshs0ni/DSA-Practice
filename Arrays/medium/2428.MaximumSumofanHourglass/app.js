function maximumSum(matrix) {
  if (matrix.length < 3 || matrix[0].length < 3) return false;
  let directions = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  let maxSum = -Infinity;
  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix[i].length - 2; j++) {
      let totalSum = 0;
      for (let [dx, dy] of directions) {
        let nx = i + dx;
        let ny = j + dy;
        totalSum += matrix[nx][ny];
      }
      maxSum = Math.max(maxSum, totalSum);
    }
  }
  return maxSum;
}

console.log(
  maximumSum([
    [6, 2, 1, 3],
    [4, 2, 1, 5],
    [9, 2, 8, 7],
    [4, 1, 2, 9],
  ]),
);
