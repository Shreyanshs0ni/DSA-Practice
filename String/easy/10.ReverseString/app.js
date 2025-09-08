/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // return s.reverse(); //this is right but we are using 2 pointer approach.
  let j = s.length - 1;
  let i = 0;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    j--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
