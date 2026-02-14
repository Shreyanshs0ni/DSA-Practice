/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  if (nums.length === 1) return true;
  let i = 0;
  while (i < nums.length) {
    if (i == nums.length - 1) break;
    if (nums[i] % 2 === 0) {
      if (nums[i + 1] % 2 !== 0) {
        i++;
      } else {
        return false;
      }
    } else {
      if (nums[i + 1] % 2 === 0) {
        i++;
      } else {
        return false;
      }
    }
  }
  return true;
};
console.log(isArraySpecial([2, 1])); //true
console.log(isArraySpecial([1])); //true
console.log(isArraySpecial([2, 1, 4])); //true
console.log(isArraySpecial([4, 3, 1, 6])); //false
