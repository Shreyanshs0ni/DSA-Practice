/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
  let res = new Array(k).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let prefixProduct = 1;
    for (let j = i; j < nums.length; j++) {
      prefixProduct = (prefixProduct * nums[j]) % k;
      res[prefixProduct]++;
    }
  }
  return res;
};

console.log(resultArray([1, 2, 3, 4, 5], 3));
console.log(resultArray([1, 2, 4, 8, 16, 32], 4));
console.log(resultArray([1, 1, 2, 1, 1], 2));
