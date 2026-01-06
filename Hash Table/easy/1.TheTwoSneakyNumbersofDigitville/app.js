/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  sortedNums = [...nums];
  let res = [];
  sortedNums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) res.push(sortedNums[i]);
  }
  return res;
};

console.log(getSneakyNumbers([0, 1, 1, 0])); //01
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); //23
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); //45
