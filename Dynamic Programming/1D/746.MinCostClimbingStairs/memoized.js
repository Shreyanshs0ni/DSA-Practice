/**
 * @param {number[]} cost
 * @return {number}
 */

function minCost(i, cost, dp) {
  if (i >= cost.length) return 0;
  if (dp[i] !== -1) return dp[i];
  let a = cost[i] + minCost(i + 1, cost, dp);
  let b = cost[i] + minCost(i + 2, cost, dp);
  dp[i] = Math.min(a, b);
  return dp[i];
}
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length).fill(-1);
  let a = minCost(0, cost, dp);
  let b = minCost(1, cost, dp);
  return Math.min(a, b);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
