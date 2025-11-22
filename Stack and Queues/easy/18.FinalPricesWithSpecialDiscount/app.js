/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [];
  const res = [...prices];

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = prices[i] - stack[stack.length - 1];
    }
    stack.push(prices[i]);
  }
  return res;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
