class MyQueue {
  constructor() {
    this.items = []; // array to store elements
  }
  //adds an element back of the queue

  enqueue(element) {
    this.items.push(element);
  }

  // Removes and returns the element from the front of the queue

  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflowed";
    }
    return this.items.shift();
  }

  // Returns the element at the front of the queue without removing

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Checks if the queue is empty

  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the number of elements in the queue

  size() {
    return this.items.length;
  }

  // Clears all elements from the queue

  clear() {
    this.items = [];
  }

  // Prints the elements of the queue

  print() {
    console.log(this.items.join(" "));
  }
}

const myQueue = new MyQueue();

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
