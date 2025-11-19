var postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let current = root;
  let lastVisited = null;

  while (current !== null || stack.length > 0) {
    // Step 1: Go left as far as possible
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      let peek = stack[stack.length - 1];

      if (peek.right !== null && lastVisited !== peek.right) {
        current = peek.right;
      } else {
        // YOUR 3 steps here
        let node = stack.pop();
        res.push(node.val);
        lastVisited = node;
      }
    }
  }

  return res;
};
