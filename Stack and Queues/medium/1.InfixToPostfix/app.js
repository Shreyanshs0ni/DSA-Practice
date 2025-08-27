function prec(c) {
  if (c === "^") return 3;
  else if (c === "/" || c === "*") return 2;
  else if (c === "+" || c === "-") return 1;
  else return -1;
}

const infixToPostfix = (s) => {
  let stack = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    // If the scanned character is an operand, add it to the output string.
    if (/[a-zA-Z0-9]/.test(c)) {
      res += c;
    } else if (c == "(") {
      stack.push("(");

      // If the scanned character is an ‘)’,
      // pop and add to the output string from the stack
      // until an ‘(‘ is encountered.
    } else if (s[i] == ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        res += stack.pop();
      }
      stack.pop();
    }
    //if operator is scanned
    else {
      while (
        (stack.length && prec(c) <= prec(stack[stack.length - 1])) ||
        (prec(c) === prec(stack[stack.length - 1]) && c !== "^")
      ) {
        res += stack.pop();
      }
      stack.push(c);
    }
  }
  // Pop all the remaining elements from the stack
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};

const exp = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(exp));
