class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function preOrder(root) {
  if (!root) return [];
  let preOrder = [];
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    preOrder.push(node.value);

    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }

  return preOrder;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(preOrder(root));
