/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0; //carry over
  }
  //if all digits were 9,we need a extra digit.
  return [1, ...digits];
};

console.log(plusOne([1, 2, 3, 4]));
