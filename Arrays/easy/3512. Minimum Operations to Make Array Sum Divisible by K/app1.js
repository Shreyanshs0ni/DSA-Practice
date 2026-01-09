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

console.log(minOperations([3, 9, 7], 5)); //4
console.log(minOperations([4, 1, 3], 4)); //0
console.log(minOperations([3, 2], 6)); //5
