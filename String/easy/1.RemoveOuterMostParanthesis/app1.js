function removeOuterMostParanthesis(s) {
  let res = "";
  let level = 0;
  for (let char of s) {
    if (char === "(") {
      if (level > 0) res += char;
      level++;
    } else if (char === ")") {
      level--;
      if (level > 0) res += char;
    }
  }
  return res;
}

let s = "()(()())(())";
console.log(removeOuterMostParanthesis(s));
