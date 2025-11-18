function reverseString(str) {
  let stack = [];

  // Push all characters
  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";

  // Pop all characters
  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

// Test
let input = "DataStructure";
console.log("Original:", input);
console.log("Reversed:", reverseString(input));
