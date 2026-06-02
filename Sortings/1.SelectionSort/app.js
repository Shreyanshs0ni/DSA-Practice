function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
}

let a = [13, 46, 24, 5, 20, 9];
console.log(a);
selectionSort(a);
console.log(a);
