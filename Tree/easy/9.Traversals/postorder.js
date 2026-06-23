class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function postOrder(root) {
  if (root === null) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

postOrder(root);
