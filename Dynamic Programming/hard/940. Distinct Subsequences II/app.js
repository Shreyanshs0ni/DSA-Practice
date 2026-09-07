const MOD = 1e9 + 7;

var distinctSubseqII = function (s) {
  let end = new Array(26).fill(0);
  let total = 0;

  for (let ch of s) {
    const index = ch.charCodeAt(0) - "a".charCodeAt(0);

    let old = end[index];

    let newEndingCount = (total + 1) % MOD;

    // Remove old contribution
    total = (total - old + MOD) % MOD;

    // Replace it with new contribution
    end[index] = newEndingCount;

    // Add new contribution
    total = (total + end[index]) % MOD;
  }

  return total;
};

console.log(distinctSubseqII("abc")); // 7
console.log(distinctSubseqII("aba")); // 6
console.log(distinctSubseqII("aaa")); // 3
