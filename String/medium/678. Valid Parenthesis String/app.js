/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let left = 0;
  let right = 0;
  for (let ch of s) {
    if (ch === "(") {
      left++;
      right++;
    } else if (ch === ")") {
      left--;
      right--;
    } else {
      left--;
      right++;
    }
    if (left < 0) left = 0;
    if (right < 0) return false;
  }
  return left === 0;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
console.log(checkValidString("("));
