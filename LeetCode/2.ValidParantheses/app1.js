var isValid = function (s) {
  let stack = [];
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (stack[stack.length - 1] === brackets[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
  }
  return stack.length === 0;
};

console.log(isValid("{}[]}"));
