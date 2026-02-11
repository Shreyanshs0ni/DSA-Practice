/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i += 2) {
    const ch = s[i];
    res.push(ch);
    if (s[i + 1] < s.length) {
      const shift = Number(s[i + 1]);
      const shifted = String.fromCharCode(ch.charCodeAt(0) + shift);
      res.push(shifted);
    }
  }
  return res.join("");
};

console.log(replaceDigits("a1c1e1")); //"abcdef"
console.log(replaceDigits("a1b2c3d4e")); //"abbdcfdhe"
