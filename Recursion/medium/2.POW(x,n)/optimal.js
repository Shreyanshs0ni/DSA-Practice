function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return pow(1 / x, -n);

  if (n % 2 === 0) {
    return pow(x * x, n / 2);
  } else {
    return x * pow(x * x, (n - 1) / 2);
  }
}

let x = 2.0;
let n = -2;

let x1 = 2.0;
let n1 = 10;

console.log(pow(x1, n1));
console.log(pow(x, n));
