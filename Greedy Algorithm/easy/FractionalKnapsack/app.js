class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

function fractionalKnapsack(W, arr, n) {
  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
  let currWeight = 0;
  let totalValue = 0.0;
  for (let i = 0; i < n; i++) {
    if (currWeight + arr[i].weight <= W) {
      currWeight += arr[i].weight;
      totalValue += arr[i].value;
    } else {
      let remain = W - currWeight;
      totalValue += (arr[i].value / arr[i].weight) * remain;
      break;
    }
  }
  return totalValue;
}

console.log(
  fractionalKnapsack(
    90,
    [new Item(100, 20), new Item(60, 10), new Item(100, 50), new Item(200, 50)],
    4,
  ),
);
