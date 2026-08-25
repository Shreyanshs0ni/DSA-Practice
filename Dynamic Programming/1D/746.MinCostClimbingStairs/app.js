/**
 * @param {number[]} cost
 * @return {number}
 */

function minCost(i, cost) {
  if (i >= cost.length) return 0;
  let a = cost[i] + minCost(i + 1, cost);
  let b = cost[i] + minCost(i + 2, cost);

  return Math.min(a, b);
}
var minCostClimbingStairs = function (cost) {
  let a = minCost(0, cost);
  let b = minCost(1, cost);
  return Math.min(a, b);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
