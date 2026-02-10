/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (string) {
  let flag = false;
  let count = 0;

  for (let ch of string) {
    if (ch === "|") {
      flag = !flag;
    } else if (!flag && ch === "*") {
      count++;
    }
  }
  return count;
};

console.log(countAsterisks("l|*e*et|c**o|*de|")); //2
console.log(countAsterisks("iamprogrammer")); //0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); //5
