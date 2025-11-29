var minOperations = function (boxes) {
  let boxArr = [...boxes];
  let res = new Array(boxArr.length).fill(0);
  for (let i = 0; i < boxArr.length; i++) {
    for (let j = 0; j < boxArr.length; j++) {
      if (boxArr[j] === "1") {
        res[i] += Math.abs(i - j);
      }
    }
  }
  return res;
};
console.log(minOperations("001011"));
 