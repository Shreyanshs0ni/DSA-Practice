class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(x) {
    const newNode = new Node(x);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return "underflow";
    const popped = this.top.value;
    this.top = this.top.next;
    this.size--;
    return popped;
  }
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
