/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = [...s];
  let left = 0;
  let right = 1;
  for (; right < arr.length; right++) {
    if (arr[right] === " " || right == arr.length - 1) {
      let start = left;
      let end = arr[right] === " " ? right - 1 : right;
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
      left = right + 1;
    }
  }
  return arr.join("");
};

console.log(reverseWords("Let's take LeetCode contest"));
