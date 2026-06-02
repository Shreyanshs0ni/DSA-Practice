function bubbleSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
    console.log("runs");
  }
}

// let a = [13, 46, 24, 52, 20, 9];
let b = [1, 2, 5, 15, 20, 52];
console.log(b);
bubbleSort(b);
console.log(b);
