/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */

let permutations = [];
function buildPermutation(current, remaining) {
  if (remaining.length === 0) {
    permutations.push(current);
    return;
  }
  for (let i = 0; i < remaining.length; i++) {
    const newCurrent = current + remaining[i];
    const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
    buildPermutation(newCurrent, newRemaining);
  }
}
var lexGreaterPermutation = function (s, target) {
  permutations = [];
  buildPermutation("", s);
  let min = null;
  for (let str of permutations) {
    if (str > target && (min === null || str < min)) {
      min = str;
    }
  }
  return min;
};

console.log(lexGreaterPermutation("abc", "bba")); //bca
console.log(lexGreaterPermutation("leet", "code")); //eelt
