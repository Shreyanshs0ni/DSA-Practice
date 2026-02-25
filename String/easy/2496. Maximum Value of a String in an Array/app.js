/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let res = [];
  for (let i of strs) {
    let val = 0;
    if (!Number.isFinite(+i)) {
      val = i.length;
      res += val;
    } else {
      res += Number(i);
    }
  }
  return Math.max(...res);
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); //5
console.log(maximumValue(["1", "01", "001", "0001"])); //1
