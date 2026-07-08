class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function VerticalOrderTraversal(root) {
  if (!root) return [];
  let q = [];
  q.push([root, 0, 0]);
  let map = new Map();

  while (q.length > 0) {
    let [temp, x, y] = q.shift();
    if (!map.has(x)) map.set(x, new Map());
    if (!map.get(x).has(y)) map.get(x).set(y, []);
    map.get(x).get(y).push(temp.val);

    if (temp.left) {
      q.push([temp.left, x - 1, y + 1]);
    }
    if (temp.right) {
      q.push([temp.right, x + 1, y + 1]);
    }
  }
  let ans = [];
  let sortedX = [...map.keys()].sort((a, b) => a - b);

  for (let x of sortedX) {
    let col = [];
    let sortedY = [...map.get(x).keys()].sort((a, b) => a - b);
    for (let y of sortedY) {
      col.push(
        ...map
          .get(x)
          .get(y)
          .sort((a, b) => a - b),
      );
    }
    ans.push(col);
  }
  return ans;
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
console.log(VerticalOrderTraversal(root));
