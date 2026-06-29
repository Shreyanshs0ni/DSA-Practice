function maxNestDepthOfParenthesis(s) {
  let count = 0;
  let res = 0;
  for (let ch of s) {
    if (ch === "(") {
      count++;
      res = Math.max(res, count);
    } else if (ch === ")") {
      count--;
    }
  }
  return res;
}

console.log(maxNestDepthOfParenthesis("(1+(2*3)+((8)/4))+1"));
console.log(maxNestDepthOfParenthesis("(1)+((2))+(((3)))"));
