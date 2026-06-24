class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function traversals(root) {
  let pre = [];
  let ino = [];
  let post = [];
  if (!root) return [];
  let stack = [[root, 1]];
  while (stack.length > 0) {
    let [node, state] = stack.pop();

    if (state === 1) {
      pre.push(node.value);
      stack.push([node, 2]);
      if (node.left !== null) {
        stack.push([node.left, 1]);
      }
    } else if (state === 2) { 
      ino.push(node.value);
      stack.push([node, 3]);
      if (node.right !== null) {
        stack.push([node.right, 1]);
      }
    } else {
      post.push(node.value);
    }
  }
  return [pre, ino, post];
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(traversals(root));
