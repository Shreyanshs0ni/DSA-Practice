/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  nums = nums.sort((a, b) => a - b);
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
};

console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
