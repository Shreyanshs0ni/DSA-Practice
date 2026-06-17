function insertAtBottom(stack, item) {
  if (stack.length === 0) {
    stack.push(item);
    return;
  }
  let top = stack.pop();
  insertAtBottom(stack, item);
  stack.push(top);
}

function reverseStack(stack) {
  if (stack.length === 0) return;
  const top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

const stack = [1, 2, 3, 4]; // 4 is the top
console.log("Before:", stack);
reverseStack(stack);
console.log("After:", stack);
