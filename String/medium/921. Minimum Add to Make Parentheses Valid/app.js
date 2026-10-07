/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let count = 0;
  let res = 0;
  for (let ch of s) {
    if (ch === "(") {
      count++;
    } else {
      if (count > 0) {
        count--;
      } else {
        res++;
      }
    }
  }
  return res + count;
};

console.log(minAddToMakeValid("())")); //1
console.log(minAddToMakeValid("(((")); //3
console.log(minAddToMakeValid("()))((")); //4
