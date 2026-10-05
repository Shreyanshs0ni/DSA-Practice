/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let stack = [];
  let maxDepth = 0;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
      depth--;
      maxDepth = Math.max(depth, maxDepth);
    } else {
      stack.push("(");
      depth++;
      maxDepth = Math.max(depth, maxDepth);
    }
  }
  console.log(maxDepth);
};

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));
console.log(scoreOfParentheses("(()(()))"));
