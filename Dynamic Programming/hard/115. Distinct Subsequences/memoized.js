function solve(s, t, i, j, dp) {
  if (j === t.length) {
    return 1;
  }
  if (i === s.length) {
    return 0;
  }
  if (dp[i][j] !== -1) return dp[i][j];
  if (s[i] === t[j]) {
    dp[i][j] = solve(s, t, i + 1, j + 1, dp) + solve(s, t, i + 1, j, dp);
    return dp[i][j];
  } else {
    dp[i][j] = solve(s, t, i + 1, j, dp);
    return dp[i][j];
  }
}

var numDistinct = function (s, t) {
  let dp = Array.from({ length: s.length }, () => new Array(t.length).fill(-1));
  return solve(s, t, 0, 0, dp);
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
