class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }
  inOrder(node) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  preOrder(node) {
    if (node === null) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  postOrder(node) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
  search(value) {
    let current = this.root;

    while (current != null) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  findMin() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
  findMax() {
    if (this.root === null) return null;
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
}
