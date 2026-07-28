function isValid(s) {
  if (s.length % 3 !== 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      stack.push(s[i]);
    } else if (s[i] === "b") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === "b" && stack[stack.length - 2] === "a") {
        stack.pop();
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("aabcbc")); //true
console.log(isValid("abcabcababcc")); //true
console.log(isValid("abccba")); //false
