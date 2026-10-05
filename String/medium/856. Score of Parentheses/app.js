/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let stack = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
    } else {
      let innerScore = stack.pop();
      let score = innerScore === 0 ? 1 : 2 * innerScore;
      stack[stack.length - 1] += score;
    }
  }
  return stack[0];
};

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));
console.log(scoreOfParentheses("(()(()))"));
