function findLargest(arr) {
  let max = arr[0];
  for (var i = 0; i <= arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const arr1 = [1, 2, 3, 4, 5];
const result1 = findLargest(arr1);
console.log("The Largest Number in array is", result1);

const arr2 = [5, 7, 9, 10, 23, 50];
const result2 = findLargest(arr2);
console.log("The Largest Number in array is", result2);
