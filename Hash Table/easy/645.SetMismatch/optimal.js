/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let missing = -1;
  let duplicate = -1;
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      duplicate = Math.abs(nums[i]);
    } else {
      nums[index] = -nums[index];
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        missing = i + 1;
        break;
      }
    }
  }
  return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4])); //[2,3]
console.log(findErrorNums([1, 1])); //[1,2]
