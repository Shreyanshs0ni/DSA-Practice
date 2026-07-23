function frogJump(stairs) {
  let n = stairs.length - 1;
  let dp = new Array(stairs.length).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let fs = Infinity;
    let ss = Infinity;
    
    fs = dp[i - 1] + Math.abs(stairs[i] - stairs[i - 1]);

    if (i > 1) {
      ss = dp[i - 2] + Math.abs(stairs[i] - stairs[i - 2]);
    }
    dp[i] = Math.min(fs, ss);
  }
  return dp[n];
}
console.log(frogJump([2, 1, 3, 5, 4]));
console.log(frogJump([7, 5, 1, 2, 6]));
