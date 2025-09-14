/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

let nums = [3, 2, 2, 3];
let val = 3;

let k = removeElement(nums, val);

console.log(k); // 2
console.log(nums); // [2, 2, 2, 3]  (only first k=2 elements matter)
