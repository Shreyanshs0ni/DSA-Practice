/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      res.reverse();
    } else {
      res.push(s[i]);
    }
  }
  return res.join("");
};

console.log(finalString("string")); //"rtsng"
console.log(finalString("poiinter")); //"ponter"
