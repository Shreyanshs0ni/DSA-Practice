/**
 * @param {string} s
 * @return {string}
 */
var removeOuterBracket = function (s) {
  let count = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") count--;
    if (count != 0) ans += s[i];
    if (s[i] === "(") count++;
  }
  return ans;
};

console.log(removeOuterBracket("(()())(())"));
console.log(removeOuterBracket("(()())(())(()(()))"));
console.log(removeOuterBracket("()()"));

// Trick: For '(' → check before incrementing, so outer '(' is skipped.
// For ')' → decrement first, then check, so outer ')' is skipped.
// Hence, only brackets with depth > 0 are added to the answer.
