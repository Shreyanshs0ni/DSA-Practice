function isBalanced(expression) {
  let stack = [];

  // Map closing → opening
  let pairs = {
    ")": "(",
    "}": "}",
    "]": "[",
  };

  for (let ch of expression) {
    // If opening bracket → push to stack
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    }

    // If closing bracket → check match
    else if (ch === ")" || ch === "}" || ch === "]") {
      if (stack.length === 0) return false; // no opening bracket

      let top = stack.pop();

      if (pairs[ch] !== top) return false; // mismatch
    }
  }

  // In the end stack must be empty
  return stack.length === 0;
}

// Test
let exp1 = "{[()]}";
let exp2 = "(a+b))(";

console.log(exp1, "=>", isBalanced(exp1) ? "Balanced" : "Not Balanced");
console.log(exp2, "=>", isBalanced(exp2) ? "Balanced" : "Not Balanced");
