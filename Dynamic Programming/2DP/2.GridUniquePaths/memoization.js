function helper(dp, i, j) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  let up = helper(dp, i - 1, j);
  let left = helper(dp, i, j - 1);
  dp[i][j] = up + left;
  return dp[i][j];
}

function uniquePaths(m, n) {
  let dp = Array.from({ length: m }, () => new Array(n).fill(-1));
  return helper(dp, m - 1, n - 1);
}

const m = 3;
const n = 7;

console.log(uniquePaths(m, n)); // 28
