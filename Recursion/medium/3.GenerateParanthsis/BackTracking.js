/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  const backtracking = (cur, open, close) => {
    // cur = current string
    // open = number of "(" used
    // close = number of ")" used

    // Base case: when string is complete
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    // If we can still add "(", add it
    if (open < n) {
      backtracking(cur + "(", open + 1, close);
    }

    // We can only add ")" if close < open (to keep balance)
    if (close < open) {
      backtracking(cur + ")", open, close + 1);
    }
  };
  backtracking("", 0, 0);
  return res;
};

console.log(generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]
