/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
  let freq = new Array(10).fill(0);

  while (n > 0) {
    freq[n % 10]++;
    n = Math.floor(n / 10);
  }
  let minFreq = Infinity;
  let result = Infinity;

  for (let i = 0; i < 10; i++) {
    if (freq[i] > 0) {
      if (freq[i] < minFreq) {
        minFreq = freq[i];
        result = i;
      }
    }
  }
  return result;
};
console.log(getLeastFrequentDigit(1553322)); //1
console.log(getLeastFrequentDigit(723344511)); //2
