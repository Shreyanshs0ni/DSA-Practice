/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  let depth = 0;
  let ans = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      ans[i] = depth % 2;
      depth++;
    } else {
      depth--;
      ans[i] = depth % 2;
    }
  }
  return ans;
};

console.log(maxDepthAfterSplit("(()())")); //[0,1,1,1,1,0]
console.log(maxDepthAfterSplit("()(())()")); // [0,0,0,1,1,0,1,1]
