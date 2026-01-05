/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let res = 0;
  let j = 1;
  arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    res += Math.abs((arr[i].charCodeAt() - 123) * j);
    j++;
  }
  return res;
};

console.log(reverseDegree("abc")); //148
console.log(reverseDegree("zaza")); //160
