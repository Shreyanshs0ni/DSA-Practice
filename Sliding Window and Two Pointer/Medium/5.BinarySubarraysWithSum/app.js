/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  function atMost(nums, goal) {
    if (goal < 0) return 0;
    let left = 0,
      count = 0,
      sum = 0,
      right = 0;

    while (right < nums.length) {
      sum += nums[right];
      while (sum > goal) {
        sum -= nums[left++];
      }
      count += right - left + 1;
      right++;
    }
    return count;
  }
  return atMost(nums, goal) - atMost(nums, goal - 1);
};
