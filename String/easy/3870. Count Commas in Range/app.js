/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  if (n < 1000) return 0;
  return n - 999;
};

console.log(countCommas(1002)); //3
console.log(countCommas(998)); //0
