/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let result = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    result.push(i, -i);
  }

  if (n % 2 === 0) {
    return result;
  } else {
    result.push(0);
  }
  return result;
};

console.log(sumZero(20));
