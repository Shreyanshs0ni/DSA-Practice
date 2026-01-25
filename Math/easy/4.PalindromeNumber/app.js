/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let revX = x.toString().split("").reverse().join("");
  return x == revX;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
