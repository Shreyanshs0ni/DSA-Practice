function twoSumExists(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    map.set(arr[i], i);

    if (map.has(complement)) {
      return true;
    }

    map.set(arr[i], i);
  }

  return false;
}
function twoSumIndices(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    map.set(arr[i], i);

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [-1, -1];
}

const arr = [2, 6, 5, 8, 11];
const target = 14;

console.log(twoSumIndices(arr, target));
console.log(twoSumExists(arr, target));
