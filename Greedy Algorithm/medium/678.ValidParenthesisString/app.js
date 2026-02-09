/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (string) {
  let min = 0;
  let max = 0;
  for (let s of string) {
    if (s === "(") {
      min++;
      max++;
    } else if (s === ")") {
      min--;
      max--;
    } else {
      min--;
      max++;
    }
    if (min < 0) min = 0;
    if (max < 0) return false;
  }
  return min === 0;
};

console.log(checkValidString("()")); //true
console.log(checkValidString("(*)")); //true
console.log(checkValidString("(*))")); //true
