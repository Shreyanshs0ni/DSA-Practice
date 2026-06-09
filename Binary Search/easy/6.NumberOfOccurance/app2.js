function lowerBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function countOccurance(arr, x) {
  let count = upperBound(arr, x) - lowerBound(arr, x);
  return count;
}

let a = [2, 2, 3, 3, 3, 3, 4];
let x = 3;
console.log(countOccurance(a, x));
