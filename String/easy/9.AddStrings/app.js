/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? num1[i] - "0" : 0;
    let digit2 = j >= 0 ? num2[j] - "0" : 0;
    let sum = digit1 + digit2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result.reverse().join("");
};

console.log(addStrings("456", "77")); // "533"
console.log(addStrings("9333852702227987", "85731737104263")); // "9419584439332250"
console.log(addStrings("0", "0")); // "0"
