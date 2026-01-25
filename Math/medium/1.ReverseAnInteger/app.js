/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  let sign = x < 0 ? -1 : 1;
  let absX = Math.abs(x);
  while (absX !== 0) {
    digit = absX % 10;
    rev = rev * 10 + digit;
    absX = Math.floor(absX / 10);
  }
  const res = rev * sign;
  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0;
  return res;
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21
