class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  const ans = [];
  if (!root) return ans;
  let queue = [root];

  while (queue.length > 0) {
    const size = queue.length;
    let level = null;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level = node.value;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(level);
  }
  return ans;
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

console.log(levelOrder(root));
