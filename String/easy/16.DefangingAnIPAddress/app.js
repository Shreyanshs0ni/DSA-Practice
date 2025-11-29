/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let res = [...address];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === ".") {
      res[i] = "[.]";
    }
  }
  return res.join("");
};

console.log(defangIPaddr("1.1.1.1"));
