function helper(dp, stairs, index) {
  if (index < 0) return 0;
  if (dp[index] !== -1) return dp[index];
  let pick = stairs[index] + helper(dp, stairs, index - 2);
  let notPick = helper(dp, stairs, index - 1);
  dp[index] = Math.max(pick, notPick);
  return dp[index];
}

function houseRobber(stairs) {
  let dp = new Array(stairs.length).fill(-1);
  return helper(dp, stairs, stairs.length - 1);
}

console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([2, 7, 9, 3, 1]));
