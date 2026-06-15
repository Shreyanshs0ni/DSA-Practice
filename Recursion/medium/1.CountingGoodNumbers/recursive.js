const MOD = 10 ** 9 + 7;

function countGoodNumber(index, n) {
  if (index === n) return 1;

  let result = 0;

  if (index % 2 == 0) {
    result = (result + 5 * countGoodNumber(index + 1, n)) % MOD;
  } else {
    result = (result + 4 * countGoodNumber(index + 1, n)) % MOD;
  }
  return result;
}
console.log(countGoodNumber(0, 1));
console.log(countGoodNumber(0, 2));
