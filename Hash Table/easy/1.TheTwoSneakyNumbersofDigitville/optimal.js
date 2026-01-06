/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let freq = new Map();
  let res = [];
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
    if (freq.get(num) === 2) {
      res.push(num);
    }
  }
  return res;
};

console.log(getSneakyNumbers([0, 1, 1, 0])); //01
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); //23
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); //45
