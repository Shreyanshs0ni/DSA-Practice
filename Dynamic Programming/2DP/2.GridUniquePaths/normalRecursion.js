function helper(i, j) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;

  let up = helper(i - 1, j);
  let left = helper(i, j - 1);

  return up + left;
}

function uniquePaths(m, n) {
  return helper(m - 1, n - 1);
}

const m = 3;
const n = 7;

console.log(uniquePaths(m, n)); // 28
