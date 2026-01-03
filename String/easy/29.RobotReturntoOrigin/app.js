/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let arr = [...moves];
  let u = 0;
  let d = 0;
  let r = 0;
  let l = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "U") {
      u++;
    } else if (arr[i] === "D") {
      d++;
    } else if (arr[i] === "R") {
      r++;
    } else if (arr[i] === "L") {
      l++;
    }
  }
  return r == l && u == d;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
