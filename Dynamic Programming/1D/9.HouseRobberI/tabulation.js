function houseRobber(nums) {
  let dp = new Array(nums.length).fill(-1);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += dp[i - 2];
    }
    let notPick = dp[i - 1];
    dp[i] = Math.max(pick, notPick);
  }
  return dp[nums.length - 1];
}

console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([2, 7, 9, 3, 1]));
