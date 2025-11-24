/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let averages = [];
  let left = 0;
  let right = nums.length - 1;
  nums = nums.sort((a, b) => a - b);
  while (left < right) {
    averages.push((nums[left] + nums[right]) / 2);
    left++;
    right--;
  }

  return Math.max(...averages);
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
