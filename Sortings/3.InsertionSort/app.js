function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
}

let a = [14, 9, 15, 12, 6, 8, 13];
insertionSort(a);
console.log(a);
