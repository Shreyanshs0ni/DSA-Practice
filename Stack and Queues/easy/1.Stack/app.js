class Stack {
  constructor() {
    this.items = []; //the array is to store stack element
  }

  //add and element on top of a stack
  push(element) {
    this.items.push(element);
  }
  //removes an element from top of a stack
  pop(element) {
    if (this.isEmpty()) {
      return "Underflowed"; // handle empty stack
    }
    return this.items.pop();
  }
  //return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  //check is stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  //Returns the number of elements in a stack
  size() {
    return this.items.length;
  }
  //clear all the elements from a stack(){
  clear() {
    this.items = [];
  }
  //returns a string represntation of stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
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
