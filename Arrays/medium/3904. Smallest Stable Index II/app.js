/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  let prefixMax = [];
  let suffixMin = [];

  let maxNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    prefixMax[i] = maxNum;
  }

  let minNum = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    minNum = Math.min(minNum, nums[i]);
    suffixMin[i] = minNum;
  }

  for (let mid = 0; mid < nums.length; mid++) {
    if (prefixMax[mid] - suffixMin[mid] <= k) {
      return mid;
    }
  }
  return -1;
};

console.log(firstStableIndex([5, 0, 1, 4], 3)); //3
console.log(firstStableIndex([3, 2, 1], 1)); //-1
console.log(firstStableIndex([0], 0)); //0
