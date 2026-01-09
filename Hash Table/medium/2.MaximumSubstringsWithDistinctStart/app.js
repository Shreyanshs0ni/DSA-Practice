/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
  let set = new Set(s);
  return set.size;
};

console.log(maxDistinct("aaaa")); //1
console.log(maxDistinct("abcd")); //4
console.log(maxDistinct("abab")); //2
