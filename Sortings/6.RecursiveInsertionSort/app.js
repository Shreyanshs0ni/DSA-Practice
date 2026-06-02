function insertionSort(arr, i, n) {
  if (i === n) return;

  j = i;
  while (j > 0 && arr[j] < arr[j - 1]) {
    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    j--;
  }
  insertionSort(arr, i + 1, n);
}

let arr = [13, 46, 24, 52, 20, 9];
console.log("Before Using Insertion Sort:");
console.log(arr);

insertionSort(arr, 0, arr.length);

console.log("After Using Insertion Sort:");
console.log(arr);
