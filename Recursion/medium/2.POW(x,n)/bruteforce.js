function pow(x, n) {
  let ans = 1;
  if (n === 0 || x === 1.0) return ans;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  for (let i = 0; i < n; i++) {
    ans = ans * x;
  }
  return ans;
}

let x = 2.0;
let n = -2;

let x1 = 2.0;
let n1 = 10;

console.log(pow(x1, n1));
console.log(pow(x, n));
