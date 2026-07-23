/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity; //track the lowest price
  let maxProfit = 0; //track the max profit

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; //update minimum price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice; //update max profit
    }
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // Output: 5
