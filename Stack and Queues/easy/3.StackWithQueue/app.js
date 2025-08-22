class q {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue underflowed";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(""));
  }
}

class Stack {
  constructor() {
    this.q = new q(); //our queue
  }
  push(x) {
    this.q.enqueue(x); //step 1 : enqueue x

    //rotate previous element behind x
    let size = this.q.size();
    for (let i = 0; i < size - 1; i++) {
      this.q.enqueue(this.q.dequeue());
    }
  }

  pop() {
    if (this.q.isEmpty()) {
      return "underflowed";
    }
    return this.q.dequeue();
  }
  top() {
    return this.q.peek();
  }

  isEmpty() {
    return this.q.isEmpty();
  }

  size() {
    return this.q.size();
  }
}

let s = new Stack();

s.push(10); // queue = [10]
s.push(20); // queue = [20, 10]
s.push(30); // queue = [30, 20, 10]

console.log(s.top()); // 30
console.log(s.pop()); // removes 30 → stack now [20, 10]
console.log(s.top()); // 20
