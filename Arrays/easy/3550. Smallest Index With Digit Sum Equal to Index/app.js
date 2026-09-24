/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let sum = 0;
    while (num > 0) {
      sum += Math.floor(num % 10);
      num = Math.floor(num / 10);
      if (sum > i) break;
    }
    if (sum === i) return i;
  }
  return -1;
};

console.log(smallestIndex([1, 3, 2])); //2
console.log(smallestIndex([1, 10, 11])); //1
console.log(smallestIndex([1, 2, 3])); //-1
