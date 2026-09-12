function solve(i, digits, digit, res, used) {
  if (i === 3) {
    if (digit % 2 === 0) {
      res.add(digit);
    }
    return;
  }
  for (let j = 0; j < digits.length; j++) {
    if (i === 0 && digits[j] === 0) continue;

    if (used[j]) continue;
    used[j] = true;
    solve(i + 1, digits, digit + digits[j], res, used);
    used[j] = false;
  }
}
var totalNumbers = function (digits) {};

console.log(totalNumbers([1, 2, 3, 4])); //12
console.log(totalNumbers([0, 2, 2])); //2
console.log(totalNumbers([6, 6, 6])); //1
