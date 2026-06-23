class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrder(root) {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

inOrder(root);
