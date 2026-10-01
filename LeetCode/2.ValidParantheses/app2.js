/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let brac of s) {
    if (brac === ")" || brac === "}" || brac === "]") {
      if (stack[stack.length - 1] !== map[brac]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(brac);
    }
  }
  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
