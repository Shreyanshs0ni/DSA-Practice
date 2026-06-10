function findSingleElement(arr) {
  if (arr.length === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[arr.length - 1] !== arr[arr.length - 2]) return arr[arr.length - 1];

  let low = 1;
  let high = arr.length - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];

    if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 !== 0 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr[low];
}

const arr = [1, 1, 2, 2, 3, 3, 5, 5, 6, 7, 7, 8, 8];
console.log(findSingleElement(arr));
