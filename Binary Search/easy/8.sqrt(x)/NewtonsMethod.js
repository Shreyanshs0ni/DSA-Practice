/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let r = x; //initial guess
  while (r * r > x) {
    r = Math.floor((r + x / r) / 2); //iterative formula
  }
  return r;
};

console.log(mySqrt(8));
