function helper(stairs, n, dp) {
  if (n === 0) return 0;
  if (dp[n] !== -1) return dp[n];

  let left = helper(stairs, n - 1, dp) + Math.abs(stairs[n] - stairs[n - 1]);
  let right = Infinity;
  if (n > 1) {
    right = helper(stairs, n - 2, dp) + Math.abs(stairs[n] - stairs[n - 2]);
  }
  return (dp[n] = Math.min(left, right));
}
function frogJump(stairs) {
  let n = stairs.length - 1;
  let dp = new Array(stairs.length).fill(-1);
  return helper(stairs, n, dp);
}
console.log(frogJump([2, 1, 3, 5, 4]));
console.log(frogJump([7, 5, 1, 2, 6]));
