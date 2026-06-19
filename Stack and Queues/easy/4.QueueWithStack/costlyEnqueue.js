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

class Queue {
  constructor() {
    this.st1 = new Stack();
    this.st2 = new Stack();
  }
  enqueue(x) {
    while (this.st1.size() > 0) {
      this.st2.push(this.st1.pop());
    }
    this.st1.push(x);
    while (this.st2.size() > 0) {
      this.st1.push(this.st2.pop());
    }
  }
  dequeue() {
    return this.st1.pop();
  }
  front() {
    return this.st1.peek();
  }
  isEmpty() {
    return this.st1.isEmpty();
  }
  size() {
    return this.st1.size();
  }
  print() {
    console.log(this.st1);
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.front());    // 10
console.log(q.dequeue());  // 10
console.log(q.dequeue());  // 20
console.log(q.dequeue());  // 30
console.log(q.isEmpty());  // true