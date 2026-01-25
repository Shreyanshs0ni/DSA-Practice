/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absent = 0;
  let lateStreak = 0;

  for (let letter of s) {
    if (letter === "A") {
      absent++;
      if (absent >= 2) return false;
    }
    if (letter === "L") {
      lateStreak++;
      if (lateStreak >= 3) return false;
    } else {
      lateStreak = 0;
    }
  }
  return true;
};

console.log(checkRecord("PPALLP")); //true
console.log(checkRecord("PPALLL")); //false
