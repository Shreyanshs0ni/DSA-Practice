function infixToPostfix(expression) {
  let stack = [];
  let postfix = "";

  // Precedence of operators
  function precedence(op) {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    if (op === "^") return 3;
    return 0;
  }

  // Check if character is an operand (a-z, A-Z, 0-9)
  function isOperand(ch) {
    return /[a-zA-Z0-9]/.test(ch);
  }

  for (let ch of expression) {
    // If operand → directly add to output
    if (isOperand(ch)) {
      postfix += ch;
    }

    // If '(' → push to stack
    else if (ch === "(") {
      stack.push(ch);
    }

    // If ')' → pop until '(' found
    else if (ch === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop(); // Remove '('
    }

    // Operator
    else {
      while (
        stack.length > 0 &&
        precedence(ch) <= precedence(stack[stack.length - 1])
      ) {
        postfix += stack.pop();
      }
      stack.push(ch);
    }
  }

  // Pop remaining operators
  while (stack.length > 0) {
    postfix += stack.pop();
  }

  return postfix;
}

// Test
let infix = "A+B*C-(D/E)";
console.log("Infix:   ", infix);
console.log("Postfix: ", infixToPostfix(infix));
