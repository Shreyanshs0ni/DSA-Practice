/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let cleanS = s.replaceAll("-", "").toString();
  let counter = 0;
  let res = [];
  for (let i = cleanS.length - 1; i >= 0; i--) {
    res.push(cleanS[i].toUpperCase());
    counter++;

    if (counter === k && i !== 0) {
      res.push("-");
      counter = 0;
    }
  }
  res = res.reverse();
  return res.join("");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); //"5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); //"2-5G-3J"
