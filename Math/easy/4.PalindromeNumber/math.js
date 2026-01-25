/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let revX = 0;
  let absX = Math.abs(x);
  while (absX !== 0) {
    const digit = absX % 10;
    revX = revX * 10 + digit;
    absX = Math.floor(absX / 10);
  }
  return x === revX;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
