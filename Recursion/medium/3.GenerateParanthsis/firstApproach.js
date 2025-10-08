/**
 * @param {number} n
 * @return {string[]}
 */

const isValid = (s) => {
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
};

var generateParenthesis = function (n) {
  let res = [];

  function generate(cur) {
    if (cur.length === 2 * n) {
      if (isValid(cur)) res.push(cur); // keep only valid
      return;
    }

    generate(cur + "(");
    generate(cur + ")");
  }

  generate("");
  return res;
};

console.log(generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]
