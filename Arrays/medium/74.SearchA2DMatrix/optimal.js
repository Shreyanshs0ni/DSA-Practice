var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let start = 0;
  let end = row * col - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midRow = Math.floor(mid / col);
    let midCol = mid % col;

    if (matrix[midRow][midCol] === target) return true;
    else if (matrix[midRow][midCol] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);
