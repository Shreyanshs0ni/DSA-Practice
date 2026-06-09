function searchInsertPos(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const arr = [1, 2, 3, 5, 6, 7, 8];
const k = 4;
console.log(searchInsertPos(arr, k));
