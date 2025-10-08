class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null; //points to top node
    this.size = 0; //keep track of how many elements
  }

  //push -> add to the top
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; //link new node to current top
    this.top = newNode; //update top to new node
    this.size++;
  }

  //Pop -> remove from top
  pop() {
    if (this.isEmpty()) {
      return null; //nothing to delete
    }
    const poppedValue = this.top.value;
    this.top = this.top.next; //move top down
    this.size--;
    return poppedValue;
  }

  //peek -> return top value
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  //check if empty
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
