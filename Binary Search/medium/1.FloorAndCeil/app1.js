function floor(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= k) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function ceil(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= k) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let a = [3, 4, 4, 7, 8, 10];
let x = 5;

console.log(floor(a, x));
console.log(ceil(a, x));
