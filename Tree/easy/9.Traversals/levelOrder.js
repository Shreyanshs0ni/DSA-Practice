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

    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level.push(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    ans.push(level);
  }
  return ans;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(levelOrder(root));
