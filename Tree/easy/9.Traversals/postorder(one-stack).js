class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function postOrder(root) {
  if (!root) return [];

  const st = [root];
  const result = [];

  while (st.length) {
    const node = st.pop();

    result.push(node.value);

    if (node.left) st.push(node.left);
    if (node.right) st.push(node.right);
  }

  return result.reverse();
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(postOrder(root));
