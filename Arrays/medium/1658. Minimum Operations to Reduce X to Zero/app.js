/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  let target = total - x;
  if (target === 0) return nums.length;

  let maxLength = -1;

  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > target) {
      sum -= nums[left];
      left++;
    }

    if (sum === target) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }
  return maxLength === -1 ? -1 : nums.length - maxLength;
};

console.log(minOperations([1, 1, 4, 2, 3], 5)); //2
console.log(minOperations([5, 6, 7, 8, 9], 4)); //-1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); //5
