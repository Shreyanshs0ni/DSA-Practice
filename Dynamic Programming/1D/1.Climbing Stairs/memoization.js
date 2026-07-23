function helper(dp, index) {
  if (index === 0) return 1;
  if (index === 1) return 1;

  if (dp[index] !== -1) return dp[index];

  let left = helper(dp, index - 1);
  let right = helper(dp, index - 2);
  dp[index] = left + right;

  return dp[index];
}
var climbStairs = function (index) {
  let dp = new Array(index + 1).fill(-1);
  return helper(dp, index);
};

console.log(climbStairs(3));

// tc -> O(n)
// sc -> O(n) + O(n)
