function map(nums, fn) {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i in arr) {
      resultArr.push(fn(arr[i], i, arr));
    }
  }
  return resultArr;
}
function addOne(a) {
  return a + 1;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(map(arr, addOne));
