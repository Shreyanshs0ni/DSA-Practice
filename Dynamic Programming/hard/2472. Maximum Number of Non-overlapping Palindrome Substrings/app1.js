/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  const n = s.length;
  let lastEnd = 0;
  let count = 0;

  for (let center = 0; center < 2 * n; center++) {
    let left = Math.floor(center / 2);
    let right = left + (center % 2);

    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left + 1 >= k) {
        const end = right + 1;

        if (left >= lastEnd) {
          lastEnd = end;
          count++;
        } else {
          lastEnd = Math.min(lastEnd, end);
        }

        break;
      }

      left--;
      right++;
    }
  }

  return count;
};

console.log(maxPalindromes("abaccdbbd", 3)); //2
console.log(maxPalindromes("adbcda", 2)); //0
