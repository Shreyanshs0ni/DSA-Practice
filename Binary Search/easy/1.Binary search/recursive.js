function binarySearch(arr, k, low, high) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === k) {
    return mid;
  } else if (arr[mid] < k) {
    return binarySearch(arr, k, mid + 1, high);
  } else {
    return binarySearch(arr, k, low, mid - 1);
  }
}
let a = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(a, 3, 0, a.length - 1));
