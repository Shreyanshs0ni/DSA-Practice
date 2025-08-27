function prec(c) {
  if (c == "^") return 3;
  else if (c === "/" || c === "*") return 2;
  else if (c === "+" || c === "-") return 1;
  else return -1;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const infixToPrefix = (s) => {
  // Step 1: Reverse string
  s = reverseString(s);

  // Step 2: Swap '(' and ')'
  s = s
    .split("")
    .map((c) => (c === "(" ? ")" : c === ")" ? "(" : c))
    .join("");

  let stack = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (/[a-zA-Z0-9]/.test(c)) {
      res += c;
    } else if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        res += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        (prec(c) < prec(stack[stack.length - 1]) ||
          (prec(c) === prec(stack[stack.length - 1]) && c !== "^"))
      ) {
        res += stack.pop();
      }
      stack.push(c);
    }
  }

  while (stack.length) {
    res += stack.pop();
  }

  // Step 3: Reverse result to get prefix
  return reverseString(res);
};

// Example
console.log(infixToPrefix("A+(B*C)")); // Output: +A*BC
