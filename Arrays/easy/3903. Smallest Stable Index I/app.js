/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  let mid = 0;

  while (mid < nums.length) {
    let maxNum = nums[0];
    let minNum = nums[mid];

    for (let i = 0; i <= mid; i++) {
      maxNum = Math.max(maxNum, nums[i]);
    }
    for (let j = mid; j < nums.length; j++) {
      minNum = Math.min(minNum, nums[j]);
    }

    if (maxNum - minNum <= k) {
      return mid;
    }
    mid++;
  }
  return -1;
};

console.log(firstStableIndex([5, 0, 1, 4], 3));
console.log(firstStableIndex([3, 2, 1], 1));
console.log(firstStableIndex([0], 0));
