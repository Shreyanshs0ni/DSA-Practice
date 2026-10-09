/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let open = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (s[i + 1] === ")") {
        if (stack.length) {
          stack.pop();
          i++;
        } else {
          ans++;
          i++;
        }
      } else {
        if (stack.length) {
          ans++;
          stack.pop();
        } else {
          ans += 2;
        }
      }
    }
  }
  if (stack.length) ans += stack.length * 2;
  return ans;
};

console.log(minInsertions("(()))")); //1
console.log(minInsertions("())")); //0
console.log(minInsertions("))())(")); //3
console.log(minInsertions("(()))(")); //3
