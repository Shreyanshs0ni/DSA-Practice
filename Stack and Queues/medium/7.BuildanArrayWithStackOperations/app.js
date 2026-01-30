/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let res = [];
  let stream = [];
  for (let i = n; i >= 1; i--) {
    stream.push(i);
  }
  let i = 0;
  while (target[i] && stream.length > 0) {
    let num = stream.pop();
    if (num === target[i]) {
      res.push("Push");
      i++;
    } else {
      res.push("Push");
      res.push("Pop");
      continue;
    }
  }
  return res;
};

console.log(buildArray([1, 3], 3)); //["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3)); //["Push","Push","Push"]
console.log(buildArray([1, 2], 4)); //["Push","Push"]
