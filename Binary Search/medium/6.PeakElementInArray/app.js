function peakElem(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
console.log(peakElem(a));
