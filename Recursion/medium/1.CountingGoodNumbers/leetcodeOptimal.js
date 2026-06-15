const MOD = 1000000007n;

function power(base, exp) {
  let res = 1n;
  base = BigInt(base);

  while (exp > 0) {
    if (exp % 2n === 1n) {
      res = (res * base) % MOD;
    }
    base = (base * base) % MOD;
    exp /= 2n;
  }
  return res;
}

function countGoodNumbers(n) {
  const N = BigInt(n);

  const evenCount = (N + 1n) / 2n;
  const oddCount = N / 2n;

  return Number((power(5, evenCount) * power(4, oddCount)) % MOD);
}

console.log(countGoodNumbers(1)); // 5
console.log(countGoodNumbers(2)); // 20
console.log(countGoodNumbers(3)); // 100
console.log(countGoodNumbers(4)); // 400
