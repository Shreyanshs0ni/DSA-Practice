function findSingleElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}

const arr = [1, 1, 2, 2, 3, 3, 5, 5, 6, 7, 7, 8, 8];
console.log(findSingleElement(arr));
