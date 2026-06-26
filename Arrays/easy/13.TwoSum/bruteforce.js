function twoSumExists(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
function twoSumIndices(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

const arr = [2, 6, 5, 8, 11];
const target = 14;

console.log(twoSumIndices(arr, target));
console.log(twoSumExists(arr, target));
