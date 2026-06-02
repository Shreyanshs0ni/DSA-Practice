function bubbleSort(arr) {
  let n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let a = [13, 46, 24, 52, 20, 9];
console.log(a);
bubbleSort(a);
console.log(a);
