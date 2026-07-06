class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function ZigZag(root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    let size = queue.length;
    let level = new Array(size);

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      const index = leftToRight ? i : size - i - 1;
      level[index] = node.value;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    leftToRight = !leftToRight;

    res.push(level);
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

console.log(ZigZag(root));
