/**
 * @param {character[][]} grid
 * @return {boolean}
 */

function solve(i, j, openCount, grid, dp) {
  let n = grid.length;
  let m = grid[0].length;

  openCount += grid[i][j] === "(" ? 1 : -1;

  if (openCount < 0) return false;

  let remaining = n - 1 - i + (m - 1 - j);

  if (openCount > remaining) return false;

  if ((openCount + remaining) % 2 !== 0) return false;

  if (i === n - 1 && j === m - 1) {
    return openCount === 0;
  }

  if (dp[i][j][openCount] !== -1) return dp[i][j][openCount];

  if (i + 1 < n) {
    if (solve(i + 1, j, openCount, grid, dp) === true) {
      return (dp[i][j][openCount] = true);
    }
  }

  if (j + 1 < m) {
    if (solve(i, j + 1, openCount, grid, dp) === true) {
      return (dp[i][j][openCount] = true);
    }
  }

  return (dp[i][j][openCount] = false);
}

var hasValidPath = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  if ((m + n - 1) % 2 === 1) return false;
  if (grid[0][0] === ")") return false;

  let dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => new Array(m + n).fill(-1)),
  );

  return solve(0, 0, 0, grid, dp);
};

console.log(
  hasValidPath([
    ["(", "(", "("],
    [")", "(", ")"],
    ["(", "(", ")"],
    ["(", "(", ")"],
  ]),
);
console.log(
  hasValidPath([
    [")", ")"],
    ["(", "("],
  ]),
);
