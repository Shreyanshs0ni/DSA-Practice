/**
 * @param {number} n
 * @return {string[]}
 */

function isValid(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}
function generate(current, n, result) {
  if (current.length === 2 * n) {
    if (isValid(current)) {
      result.push(current);
    }
    return;
  }
  generate(current + "(", n, result);
  generate(current + ")", n, result);
}
var generateParenthesis = function (n) {
  let result = [];
  generate("", n, result);
  return result;
};

console.log(generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]
