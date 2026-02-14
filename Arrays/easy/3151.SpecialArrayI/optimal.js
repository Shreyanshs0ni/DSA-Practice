/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  if (nums.length === 1) return true;
  let i = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      return false;
    }
  }
  return true;
};
console.log(isArraySpecial([2, 1])); //true
console.log(isArraySpecial([1])); //true
console.log(isArraySpecial([2, 1, 4])); //true
console.log(isArraySpecial([4, 3, 1, 6])); //false
