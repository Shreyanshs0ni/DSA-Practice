/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let zeroes = 0;
  let n = arr.length;
  for (let num of arr) {
    if (num === 0) zeroes++;
  }
  let i = n - 1;
  let j = n + zeroes - 1;

  while (i >= 0) {
    if (arr[i] !== 0) {
      if (j < n) arr[j] = arr[i];
    } else {
      if (j < n) arr[j] = 0;
      j--;
      if (j < n) arr[j] = 0;
    }
    i--;
    j--;
  }
};  s