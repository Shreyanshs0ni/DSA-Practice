/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let map = new Map();
  let res = "";
  for (let i = 0; i < s.length; i++) {
    map.set(indices[i], s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    res += map.get(i);
  }
  return res;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
