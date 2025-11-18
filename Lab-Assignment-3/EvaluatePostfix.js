function evaluatePostfix(expr) {
  let stack = [];

  for (let ch of expr) {
    // If operand → push to stack
    if (!isNaN(ch)) {
      stack.push(Number(ch));
    }

    // If operator → pop two values and apply
    else {
      let b = stack.pop();
      let a = stack.pop();

      switch (ch) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        case "^":
          stack.push(a ** b);
          break;
        default:
          throw new Error("Invalid operator: " + ch);
      }
    }
  }

  return stack.pop();
}

// Test
let postfix = "231*+9-";
console.log("Postfix:", postfix);
console.log("Result:", evaluatePostfix(postfix));
