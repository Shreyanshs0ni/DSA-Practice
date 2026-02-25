/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = 0;
  for (let str of strs) {
    let num = Number(str);
    let value = Number.isNaN(num) ? str.length : num;
    max = Math.max(max, value);
  }
  return max;
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); //5
console.log(maximumValue(["1", "01", "001", "0001"])); //1
