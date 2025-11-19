function postOrder(root) {
  let stack1 = [root];
  let stack2 = [];
  let res = [];

  while (stack1.length > 0) {
    let node = stack1.pop();
    stack2.push(node);

    if (node.left) stack1.push(node.left);
    if (node.right) stack1.push(node.right);
  }
  while (stack2.length > 0) {
    res.push(stack2.pop().val);
  }
  return res;
}
