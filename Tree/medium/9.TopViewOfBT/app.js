class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function TopView(root) {
  let res = [];
  if (!root) return res;
  let map = new Map();
  let q = [];
  q.push([root, 0]);

  while (q.length > 0) {
    let [node, line] = q.shift();
    if (!map.has(line)) {
      map.set(line, node.value);
    }
    if (node.left) {
      q.push([node.left, line - 1]);
    }
    if (node.right) {
      q.push([node.right, line + 1]);
    }
  }
  let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
  for (let key of sortedKeys) {
    res.push(map.get(key));
  }
  return res;
}

// Example Tree
//
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(TopView(root));
