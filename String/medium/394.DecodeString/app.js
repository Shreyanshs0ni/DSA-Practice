var decodeString = function (s) {
  let charStack = [];
  let numStack = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] >= "0" && s[i] <= "9") {
      let digit = 0;
      while (s[i] >= "0" && s[i] <= "9") {
        digit = digit * 10 + s[i] * 1;
        i++;
      }
      numStack.push(digit);
      i--;
    } else if (s[i] === "]") {
      let char = "";
      let repeated = "";
      let num = numStack.pop();
      while (charStack[charStack.length - 1] !== "[") {
        char = charStack.pop() + char;
      }
      charStack.pop();
      charStack.push(char.repeat(num));
    } else {
      charStack.push(s[i]);
    }
    i++;
  }
  return charStack.join("");
};

console.log(decodeString("3[a]2[bc]")); //aaabcbc
console.log(decodeString("3[a2[c]]")); //accaccacc
console.log(decodeString("2[abc]3[cd]ef")); //abcabccdcdcdef;
console.log(decodeString("12[a]"));
