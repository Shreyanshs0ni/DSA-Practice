function sumN(n, sum) {
  if (n < 1) return sum;
  return sumN(n - 1, sum + n);
}

console.log(sumN(3, 0)); //6
console.log(sumN(10, 0)); //55
