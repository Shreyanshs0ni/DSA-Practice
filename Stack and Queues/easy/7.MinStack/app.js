class MinStack {
  constructor() {
    this.items = [];
    this.min = [];
  }

  push(val) {
    this.items.push(val);
    if (this.min.length === 0) {
      this.min.push(val);
    }
    const currentMin = this.currentMin[this.currentMin.length - 1];
    this.min.push(Math.min(currentMin, val));
  }
  pop() {
    this.items.pop();
    this.min.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  getMin() {
    return this.min[this.min.length - 1];
  }
}

