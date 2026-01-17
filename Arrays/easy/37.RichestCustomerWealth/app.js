/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let rich = 0;
  for (let i of accounts) {
    let sum = 0;
    for (let money of i) {
      sum += money;
    }
    rich = Math.max(rich, sum);
  }
  return rich;
};
