const MOD = 10 ** 9 + 7;

function countGoodNumber(n) {
  const N = BigInt(n);
  const evenCount = (N + 1n) / 2n;
  const oddCount = N / 2n;

  return Number((power(5, evenCount) * power(4, oddCount)) % MOD);
}
console.log(countGoodNumber(0, 1));
console.log(countGoodNumber(0, 2));
