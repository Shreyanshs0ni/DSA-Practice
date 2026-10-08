/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let open = 0;
  let close = 0;

  //left to right
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else {
      close++;
    }
    if (open === close) {
      res = Math.max(res, open + close);
    }

    if (close > open) close = open = 0;
  }
  open = 0;
  close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") {
      open++;
    } else {
      close++;
    }
    if (open === close) {
      res = Math.max(res, open + close);
    }
    if (open > close) close = open = 0;
  }
  return res;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
