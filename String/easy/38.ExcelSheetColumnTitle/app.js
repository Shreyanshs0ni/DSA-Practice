/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";

  while (columnNumber !== 0) {
    columnNumber--;
    res = String.fromCharCode((columnNumber % 26) + 65) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(convertToTitle(1)); // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
