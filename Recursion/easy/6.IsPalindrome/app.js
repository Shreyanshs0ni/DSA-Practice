/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanS = "";
  let alphabets = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let set = new Set([...alphabets]);
  for (let letter of s) {
    if (set.has(letter)) {
      cleanS += letter.toLowerCase();
    }
  }
  const check = (left, right) => {
    if (left >= right) return true;
    if (cleanS[left] !== cleanS[right]) return false;
    return check(left + 1, right - 1);
  };
  return check(0, cleanS.length - 1);
};
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
