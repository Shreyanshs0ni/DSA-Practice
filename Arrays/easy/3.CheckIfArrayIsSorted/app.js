function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const result1 = isSorted(arr1);
console.log(result1);
const arr2 = [1, 3, 4, 2, 4, 2, 6, 2];
const result2 = isSorted(arr2);
console.log(result2);
