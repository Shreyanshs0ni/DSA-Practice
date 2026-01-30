/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let res = [];
  let i = 0;
  for (let num = 1; num <= n && i < target.length; num++) {
    res.push("Push");
    if (num === target[i]) {
      i++;
    } else {
      res.push("Pop");
    }
  }

  return res;
};

console.log(buildArray([1, 3], 3)); //["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3)); //["Push","Push","Push"]
console.log(buildArray([1, 2], 4)); //["Push","Push"]
