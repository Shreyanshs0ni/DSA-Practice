/**
 * @param {number} n
 * @return {boolean}
 */
const getNext = (n) => {
  let total = 0;
  while (n > 0) {
    let digit = n % 10;
    total += digit * digit;
    n = Math.floor(n / 10);
  }
  return total;
};
var isHappy = function (n) {
  let slow = n,
    fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};

// Example
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
