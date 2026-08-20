class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n);
    this.build(arr, 0, 0, this.n - 1);
  }

  gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  }

  build(arr, node, left, right) {
    if (left === right) {
      this.tree[node] = arr[left];
      return;
    }
    const mid = Math.floor((left + right) / 2);

    this.build(arr, 2 * node + 1, left, mid);
    this.build(arr, 2 * node + 2, mid + 1, right);

    this.tree[node] = this.gcd(
      this.tree[2 * node + 1],
      this.tree[2 * node + 2],
    );
  }
}

console.log(gcd(24, 18));
