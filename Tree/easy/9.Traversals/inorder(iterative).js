class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrder(root) {
  const st = [];
  const result = [];
  let node = root;

  while (node !== null || st.length > 0) {
    while (node !== null) {
      st.push(node);
      node = node.left;
    }
    node = st.pop();
    result.push(node.value);
    node = node.right;
  }
  return result;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(inOrder(root));
