/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (greed, s) {
  let sortedGreed = greed.sort((a, b) => a - b);
  let sortedS = s.sort((a, b) => a - b);
  let l = 0;
  let r = 0;

  while (r < sortedS.length) {
    if (sortedGreed[l] <= sortedS[r]) {
      l++;
    }
    r++;
  }
  return l;
};

console.log(findContentChildren([1, 2, 3], [1, 1])); //1
console.log(findContentChildren([1, 2], [1, 2, 3])); //2
