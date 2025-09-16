/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return myPow(1 / x, -n);

  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x * x, (n - 1) / 2);
  }
};

console.log(myPow(2.0, 10)); // 1024
console.log(myPow(2.0, -2)); // 0.25
console.log(myPow(3.0, 5)); // 243
