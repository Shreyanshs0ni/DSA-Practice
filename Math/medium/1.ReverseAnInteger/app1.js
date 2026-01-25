/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const absX = Math.abs(x);
  const rev = absX.toString().split("").reverse().join("");
  if (rev > 2 ** 31) return 0;

  return rev * Math.sign(x);
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21
