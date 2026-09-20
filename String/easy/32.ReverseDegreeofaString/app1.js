/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += (26 - (s[i].charCodeAt(0) - 97)) * (i + 1);
  }
  return res;
};

console.log(reverseDegree("abc")); //148
console.log(reverseDegree("zaza")); //160
