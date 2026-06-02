function bubbleSort(arr, n) {
  if (n === 1) return;

  let didSwap = false;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    didSwap = true;
  }

  if (!didSwap) return;
  bubbleSort(arr, n - 1);
}

// Main execution
let a = [13, 46, 24, 52, 20, 9];
console.log("Before Using Bubble Sort:");
console.log(a);

bubbleSort(a, a.length);

console.log("After Using Bubble Sort:");
console.log(a);
