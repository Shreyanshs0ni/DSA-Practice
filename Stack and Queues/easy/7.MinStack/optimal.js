class MinStack {
  constructor() {
    this.items = [];
    this.min = null;
  }

  push(x) {
    if (this.items.length === 0) {
      this.items.push(x);
      this.min = x;
      return;
    }

    if (x >= this.min) {
      this.items.push(x);
    } else {
      this.items.push(2 * x - this.min);
      this.min = x;
    }
  }

  pop() {
    if (this.items.length === 0) return null;

    let x = this.items.pop();

    if (x < this.min) {
      let originalMin = this.min;
      this.min = 2 * this.min - x;

      if (this.items.length === 0) {
        this.min = null;
      }

      return originalMin;
    }

    if (this.items.length === 0) {
      this.min = null;
    }

    return x;
  }

  top() {
    if (this.items.length === 0) return null;

    let x = this.items[this.items.length - 1];

    if (x < this.min) {
      return this.min;
    }

    return x;
  }

  getMin() {
    return this.min;
  }
}
