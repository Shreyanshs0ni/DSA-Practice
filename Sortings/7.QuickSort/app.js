function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}

let a = [4, 6, 2, 5, 7, 9, 1, 3];
console.log(a);
quickSort(a, 0, a.length - 1);
console.log(a);
