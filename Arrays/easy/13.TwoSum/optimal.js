function twoSumExists(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return true;
    } else if (arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
function twoSumIndices(arr, target) {
  let numWithIndex = arr.map((val, idx) => [val, idx]);

  numWithIndex.sort((a, b) => a[0] - b[0]);
  let left = 0;

  let right = arr.length - 1;

  while (left < right) {
    if (numWithIndex[left][0] + numWithIndex[right][0] === target) {
      return [numWithIndex[left][1], numWithIndex[right][1]];
    } else if (numWithIndex[left][0] + numWithIndex[right][0] > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

const arr = [2, 6, 5, 8, 11];
const target = 14;

console.log(twoSumIndices(arr, target));
console.log(twoSumExists(arr, target));
