function buyStockAndSell(arr) {
  let minimum = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= minimum) {
      minimum = arr[i];
    } else {
      let profit = arr[i] - minimum;
      maxProfit = Math.max(profit, maxProfit);
    }
  }
  return maxProfit;
}

console.log(buyStockAndSell([7, 1, 5, 3, 6, 4]));
console.log(buyStockAndSell([7, 6, 4, 3, 1]));
