function preOrder(root) {
  if (root === null) return [];
  let res = [];
  let stack = [];
  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);

    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
  return res;
}
