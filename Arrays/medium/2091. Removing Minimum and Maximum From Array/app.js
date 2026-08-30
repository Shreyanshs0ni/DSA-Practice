/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  if (nums.length === 1) return 1;
  if (nums.length === 2) return 2;

  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  let leftMost = Math.min(minIndex, maxIndex);
  let rightMost = Math.max(minIndex, maxIndex);

  let res = 0;
  res = Math.min(
    rightMost + 1,
    nums.length - leftMost,
    leftMost + 1 + (nums.length - rightMost),
  );
  return res;
};
console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])); //5
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])); //3
console.log(minimumDeletions([101])); //1
