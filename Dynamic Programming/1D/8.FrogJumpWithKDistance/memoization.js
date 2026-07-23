function helper(dp, stairs, k, index) {
  if (index === 0) return 0;
  if (dp[index] !== -1) return dp[index];
  let minSteps = Infinity;

  for (let j = 1; j <= k; j++) {
    if (index - j >= 0) {
      let jump =
        helper(dp, stairs, k, index - j) +
        Math.abs(stairs[index] - stairs[index - j]);
      minSteps = Math.min(minSteps, jump);
    }
  }
  dp[index] = minSteps;
  return dp[index];
}
function frogJump(stairs, k) {
  let dp = new Array(stairs.length + 1).fill(-1);
  return helper(dp, stairs, k, stairs.length - 1);
}

console.log(frogJump([10, 5, 20, 0, 15], 2));
console.log(frogJump([15, 4, 1, 14, 15], 3));
