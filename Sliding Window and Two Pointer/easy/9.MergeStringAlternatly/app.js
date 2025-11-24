/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let arr1 = [...word1];
  let arr2 = [...word2];
  let res = [];
  let left = 0;
  let right = 0;
  while (left !== arr1.length || right != arr2.length) {
    if (left < arr1.length) {
      res.push(arr1[left]);
      left++;
    }

    if (right < arr2.length) {
      res.push(arr2[right]);
      right++;
    }
  }
  return res.join("");
};

console.log(mergeAlternately("abc", "pqr"));
