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

let a = [3, 4, 13, 13, 13, 20, 40];
let x = 13;
console.log(FirstOccurance(a, x));
console.log(LastOccurance(a, x));
