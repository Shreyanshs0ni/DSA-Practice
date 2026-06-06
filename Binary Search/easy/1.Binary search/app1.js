function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (k > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
let a = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(a, 3));
