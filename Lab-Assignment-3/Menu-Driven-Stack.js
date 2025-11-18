const prompt = require("prompt-sync")();

class Stack {
  constructor(size) {
    this.size = size;
    this.stack = new Array(size);
    this.top = -1;
  }

  // push()
  push(element) {
    if (this.top === this.size - 1) {
      console.log("Stack Overflow!");
      return;
    }
    this.stack[++this.top] = element;
    console.log(element, "pushed.");
  }

  // pop()
  pop() {
    if (this.top === -1) {
      console.log("Stack Underflow!");
      return;
    }
    console.log("Popped:", this.stack[this.top]);
    this.top--;
  }

  // isEmpty()
  isEmpty() {
    console.log(this.top === -1 ? "Stack is Empty" : "Stack is NOT Empty");
  }

  // isFull()
  isFull() {
    console.log(
      this.top === this.size - 1 ? "Stack is Full" : "Stack is NOT Full"
    );
  }

  // display()
  display() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack elements:");
    for (let i = this.top; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }

  // peek()
  peek() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return;
    }
    console.log("Top element:", this.stack[this.top]);
  }
}

// ------------------ MENU ------------------

let size = parseInt(prompt("Enter stack size: "));
let s = new Stack(size);

while (true) {
  console.log("\n1. Push");
  console.log("2. Pop");
  console.log("3. isEmpty");
  console.log("4. isFull");
  console.log("5. Display");
  console.log("6. Peek");
  console.log("7. Exit");

  let ch = parseInt(prompt("Enter choice: "));

  switch (ch) {
    case 1:
      let val = prompt("Enter value: ");
      s.push(val);
      break;
    case 2:
      s.pop();
      break;
    case 3:
      s.isEmpty();
      break;
    case 4:
      s.isFull();
      break;
    case 5:
      s.display();
      break;
    case 6:
      s.peek();
      break;
    case 7:
      process.exit();
    default:
      console.log("Invalid choice!");
  }
}
 