/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 !== 0) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log([3, 0, 1]);
