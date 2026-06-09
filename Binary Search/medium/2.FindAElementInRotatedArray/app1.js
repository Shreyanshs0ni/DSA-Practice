function findElementInRotatedArray(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) return mid;

    //left half sorted
    if (arr[low] <= arr[mid]) {
      if (k <= arr[mid] && k >= arr[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    //right half sorted
    else {
      if (arr[mid] <= k && arr[high] >= k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

const arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const n = 9;
console.log(findElementInRotatedArray(arr, n));
