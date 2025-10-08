const countGoodNumbers = (n) => {
  const MOD = 1e9 + 7;

  //fast power function exponentiation
  function modPow(base, exp, mod) {
    let result = 1n;
    let b = BigInt(base);
    let e = BigInt(exp);
    let m = BigInt(mod);

    while (e > 0) {
      if (e % 2n === 1n) {
        result = (result * b) % m;
      }
      b = (b * b) % m;
      e = e / 2n;
    }
    return result;
  }
  let evenCount = Math.ceil(n / 2);
  let oddCount = Math.floor(n / 2);

  let ans =
    (modPow(5, evenCount, MOD) * modPow(4, oddCount, MOD)) % BigInt(MOD);

  return Number(ans);
};

 console.log(countGoodNumbers(50));
