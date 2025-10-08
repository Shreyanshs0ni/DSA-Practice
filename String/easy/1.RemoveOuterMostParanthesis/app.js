function removeOuterBracket(s) {
  let counter = 0;
  let ans = "";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == ")") counter--;
    if (counter != 0) ans += s[i];
    if (s[i] == "(") counter++;
  }
  return ans;
}

const s1 = "(()())(()())(()())";
console.log(removeOuterBracket(s1));
