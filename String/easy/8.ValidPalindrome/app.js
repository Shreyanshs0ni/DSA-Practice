/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // remove non-alphanumeric and convert to lowercase
  let cleanS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleanS.length - 1;

  while (left < right) {
    if (cleanS[left] !== cleanS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
