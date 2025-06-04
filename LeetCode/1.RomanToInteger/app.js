function RomanToInteger(n) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < n.length; i++) {
    const current = roman[n[i]];
    const next = roman[n[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}

console.log(RomanToInteger("MCMXCIV"));
