class Stack {
  constructor() {
    this.item = [];
  }
  push(x) {
    this.item.push(x);
  }
  pop() {
    if (this.isEmpty()) {
      return "Underlow";
    }
    return this.item.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Underlow";
    }
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  clear() {
    this.item = [];
  }
  printStack() {
    let res = "";
    for (let i = 0; i < this.item.length; i++) {
      res += this.item[i];
    }
    return res;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack after pushes:", myStack.printStack()); // Output: 10 20 30

console.log("Top element (peek):", myStack.peek()); // Output: 30

console.log("Popped element:", myStack.pop()); // Output: 30
console.log("Stack after pop:", myStack.printStack()); // Output: 10 20

console.log("Is stack empty?", myStack.isEmpty()); // Output: false

console.log("Stack size:", myStack.size()); // Output: 2

myStack.clear();
console.log("Stack after clear:", myStack.printStack()); // Output: (empty string)
console.log("Is stack empty?", myStack.isEmpty()); // Output: true
