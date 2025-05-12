function binarySearch(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (k > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const arr1 = [1, 3, 5, 7, 8, 10, 14, 17, 19];
const num = 5;
console.log(binarySearch(arr1, num));
