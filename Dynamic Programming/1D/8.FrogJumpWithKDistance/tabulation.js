function frogJump(stairs, k) {
  let dp = new Array(stairs.length + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i < stairs.length; i++) {
    let minSteps = Infinity;
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) {
        let jump = dp[i - j] + Math.abs(stairs[i] - stairs[i - j]);
        minSteps = Math.min(jump, minSteps);
      }
    }
    dp[i] = minSteps;
  }
  return dp[stairs.length - 1];
}

console.log(frogJump([10, 5, 20, 0, 15], 2));
console.log(frogJump([15, 4, 1, 14, 15], 3));
