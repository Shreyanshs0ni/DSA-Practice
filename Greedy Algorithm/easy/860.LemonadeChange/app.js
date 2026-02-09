/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fives = 0,
    tens = 0;
  for (let bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (fives) {
        fives--;
        tens++;
      } else {
        return false;
      }
    } else {
      if (tens && fives) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); //true
console.log(lemonadeChange([5, 5, 10, 10, 20])); //false
