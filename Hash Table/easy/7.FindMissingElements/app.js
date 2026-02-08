/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  let res = [];
  let set = new Set(nums);
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  while (min <= max) {
    if (!set.has(min)) res.push(min);
    min++;
  }
  return res;
};

console.log(findMissingElements([1, 4, 2, 5])); //[3]
console.log(findMissingElements([7, 8, 6, 9])); //[]
console.log(findMissingElements([5, 1])); //[2,3,4]
