class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    const removedValue = this.stack.pop();
    if (removedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return removedValue;
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.stack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

let st = new MinStack();

st.push(5);
st.push(2);
st.push(3);

console.log(st.getMin()); // 2

st.pop();

console.log(st.getMin()); // 2

st.pop();

console.log(st.getMin()); // 5
