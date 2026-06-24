class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function postOrder(root) {
  if (!root) return null;

  let st1 = [root];
  let st2 = [];
  let result = [];
  while (st1.length > 0) {
    const node = st1.pop();

    st2.push(node);
    if (node.left) st1.push(node.left);
    if (node.right) st1.push(node.right);
  }
  while (st2.length > 0) {
    result.push(st2.pop().value);
  }

  return result;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(postOrder(root));
