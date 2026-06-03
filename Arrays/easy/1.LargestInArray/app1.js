function findLargest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

let a = [1, 2, 3, 4, 5];
console.log(findLargest(a));
