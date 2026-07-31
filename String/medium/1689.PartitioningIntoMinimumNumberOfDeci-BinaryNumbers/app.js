var minPartitions = function (n) {
  let maxNum = 0;
  for (let i = 0; i < n.length; i++) {
    maxNum = Math.max(maxNum, Number(n[i]));
  }
  return maxNum;
};

console.log(minPartitions("32"));
console.log(minPartitions("82734"));
console.log(minPartitions("27346209830709182346"));
