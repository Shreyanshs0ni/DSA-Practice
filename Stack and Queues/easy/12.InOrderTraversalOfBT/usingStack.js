function inOrder(root) {
  let res = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    res.push(current.val);

    current = current.right;
  }
  return res;
}
