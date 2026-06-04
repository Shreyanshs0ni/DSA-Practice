function removeDups(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDups(nums);
console.log("Unique count =", k);
console.log("Array after removing duplicates:", nums.slice(0, k));
