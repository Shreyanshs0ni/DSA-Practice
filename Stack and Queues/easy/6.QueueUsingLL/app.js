class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.rear = this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedValue = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      //queue became empty
      this.rear = null;
    }
    this.size--;
    return removedValue;
  }
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }
  isEmpty() {
    return this.front === null && this.rear === null;
  }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.dequeue();
console.log(q.peek());
