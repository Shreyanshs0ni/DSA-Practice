function buyStockAndSell(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let profit = arr[j] - arr[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

console.log(buyStockAndSell([7, 1, 5, 3, 6, 4]));
console.log(buyStockAndSell([7, 6, 4, 3, 1]));
