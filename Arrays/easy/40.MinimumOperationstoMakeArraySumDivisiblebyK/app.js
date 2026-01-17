/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }
  return sum % k;
};
