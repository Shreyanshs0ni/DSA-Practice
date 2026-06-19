class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(x) {
    this.items.push(x);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "undeflow";
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return "undeflow";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  print() {
    console.log(this.items.join(""));
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log("Queue after enqueuing:");
myQueue.print(); // Output: 10 20 30

console.log("Dequeued element:", myQueue.dequeue()); // Output: 10
console.log("Queue after dequeuing:");
myQueue.print(); // Output: 20 30

console.log("Front element:", myQueue.peek()); // Output: 20

console.log("Is queue empty?", myQueue.isEmpty()); // Output: false

console.log("Queue size:", myQueue.size()); // Output: 2

myQueue.clear();
console.log("Is queue empty after clearing?", myQueue.isEmpty()); // Output: true
