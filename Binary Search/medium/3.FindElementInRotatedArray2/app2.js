function findElementInRotatedArray(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let res = false;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //target at mid
    if (arr[mid] === k) return true;

    //cannot determine sorted side due to duplicates
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;
      continue;
    }

    //left half is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }

      //right half is sorted
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return res;
}

let a = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let x = 8;
console.log(findElementInRotatedArray(a, x));
