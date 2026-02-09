/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  function atMost(nums, k) {
    let left = 0,
      right = 0,
      count = 0,
      oddCount = 0;
    while (right < nums.length) {
      if (nums[right] % 2 !== 0) oddCount++;
      while (oddCount > k) {
        if (nums[left] % 2 !== 0) oddCount--;
        left++;
      }
      count += right - left + 1;
      right++;
    }
    return count;
  }
  return atMost(nums, k) - atMost(nums, k - 1);
};
