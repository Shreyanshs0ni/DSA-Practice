class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function BottomView(root) {
  let res = [];
  if (!root) return res;
  let q = [];
  q.push([root, 0]);
  let map = new Map();
  while (q.length > 0) {
    let [node, line] = q.shift();
    map.set(line, node.value);
    if (node.left) {
      q.push([node.left, line - 1]);
    }
    if (node.right) {
      q.push([node.right, line + 1]);
    }
  }
  sorted = [...map.keys()].sort((a, b) => a - b);
  for (let x of sorted) {
    res.push(map.get(x));
  }
  return res;
}

// Example Tree
//
//         2
//       /   \
//      7     5
//     / \     \
//    2   6     9
//       / \   /
//      5  11 4

let root = new Node(
  2,
  new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))),
  new Node(5, null, new Node(9, new Node(4))),
);
console.log(BottomView(root));
