/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (string) {
  let flag = 0;
  let count = 0;
  for (let s of string) {
    if (flag > 0 && s === "|") {
      flag--;
    } else if (s === "|") {
      flag++;
    } else {
      if (flag === 0 && s === "*") {
        count++;
      }
    }
  }
  return count;
};

console.log(countAsterisks("l|*e*et|c**o|*de|")); //2
console.log(countAsterisks("iamprogrammer")); //0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); //5
