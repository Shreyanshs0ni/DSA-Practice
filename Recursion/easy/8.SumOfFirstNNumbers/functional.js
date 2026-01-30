function sumN(n) {
  if (n === 0) return 0;
  return sumN(n - 1) + n;
}

console.log(sumN(3)); //6
console.log(sumN(10)); //55
