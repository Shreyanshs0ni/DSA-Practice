/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let n = num.length - 1;
  while (n >= 0 && num[n] === "0") {
    n--;
  }
  return num.slice(0, n + 1);
};

console.log(removeTrailingZeros("51230100")); //51230100
console.log(removeTrailingZeros("123")); //123
