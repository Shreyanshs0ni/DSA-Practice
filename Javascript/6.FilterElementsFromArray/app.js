function filter(nums, fn) {
  let filterArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i in nums) {
      let element = nums[i];
      if (fn(nums[i], i, nums)) {
        filterArray.push(nums[i]);
      }
    }
  }
  return filterArray;
}
const greaterThanTen = (value) => {
  if (val > 10) {
    return true;
  } else {
    return false;
  }
};

const arr = [1, 2, 3, 4, 5, 12, 14, 54, 56, 43];
console.log(filter(arr, greaterThanTen));
