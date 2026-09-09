/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  if (n > 999999999999999) {
    return (
      (n - 999999999999999) * 5 +
      (999999999999999 - 999999999999) * 4 +
      (999999999999 - 999999999) * 3 +
      (999999999 - 999999) * 2 +
      (999999 - 999)
    );
  } else if (n > 999999999999) {
    return (
      (n - 999999999999) * 4 +
      (999999999999 - 999999999) * 3 +
      (999999999 - 999999) * 2 +
      (999999 - 999)
    );
  } else if (n > 999999999) {
    return (n - 999999999) * 3 + (999999999 - 999999) * 2 + (999999 - 999);
  } else if (n > 999999) {
    return (n - 999999) * 2 + (999999 - 999);
  } else if (n > 999) {
    return n - 999;
  } else {
    return 0;
  }
};

console.log(countCommas(1002)); //3
console.log(countCommas(998)); //0
console.log(countCommas(1004590)); //1008182
