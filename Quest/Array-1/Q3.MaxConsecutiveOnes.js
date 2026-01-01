/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 && curr <= max) {
      curr++;
    } else {
      max = curr;
    }
    max = Math.max(curr, max);
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); //2
