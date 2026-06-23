class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

function fractionalKnapsack(arr, W, n) {
  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
  let currWeight = 0;
  let finalValue = 0.0;

  for (let i = 0; i < n; i++) {
    if (currWeight + arr[i].weight <= W) {
      currWeight += arr[i].weight;
      finalValue += arr[i].value;
    } else {
      let remain = W - currWeight;
      finalValue += (arr[i].value / arr[i].weight) * remain;
      break;
    }
  }
  return finalValue;
}

function main() {
  const n = 3;
  const weight = 50;
  const arr = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];
  let ans = fractionalKnapsack(arr, weight, n);
  console.log(`The maximum value is: ${ans}`);
}

main();
