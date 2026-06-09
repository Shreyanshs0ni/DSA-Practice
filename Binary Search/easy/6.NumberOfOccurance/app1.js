function LastOccurance(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      result = mid;
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

function FirstOccurance(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function countOccurance(arr, x) {
  const first = FirstOccurance(arr, x);
  if (first === -1) return -1;
  const last = LastOccurance(arr, x);
  return last - first + 1;
}

let a = [2, 2, 3, 3, 3, 3, 4];
let x = 3;
console.log(countOccurance(a, x));
