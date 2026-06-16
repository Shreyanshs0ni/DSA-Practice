function sortedInsert(stack, element) {
  // For ascending order (smallest at bottom, largest at top)
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element);
    return;
  }

  const top = stack.pop();

  sortedInsert(stack, element);

  stack.push(top);
}

function sortStack(stack) {
  if (stack.length === 0) {
    return;
  }

  const top = stack.pop();

  sortStack(stack);

  sortedInsert(stack, top);
}

const stack = [30, -5, 18, 14, -3]; // -3 is at the top

console.log("Before:", stack);

sortStack(stack);

console.log("After:", stack);
