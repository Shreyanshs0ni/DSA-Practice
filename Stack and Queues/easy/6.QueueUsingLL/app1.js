class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x) {
    const newNode = new Node(x);
    if (this.front === null && this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) return "underflow";
    const dequeued = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return dequeued;
  }
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}
