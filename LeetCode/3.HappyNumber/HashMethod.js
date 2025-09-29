/**
 * @param {number} n
 * @return {boolean}
 */

const getNext = (n) => {
  let total = 0;
  while (n > 0) {
    let digits = n % 10;
    total += digits * digits;
    n = Math.floor(n / 10);
  }
  return total;
};
var isHappy = function (n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  return n === 1;
};

// Example
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
