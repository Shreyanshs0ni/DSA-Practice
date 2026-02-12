var removeTrailingZeros = function (num) {
  return num.replace(/0+$/, "");
};

console.log(removeTrailingZeros("51230100")); //51230100
console.log(removeTrailingZeros("123")); //123
