/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let obj = {};
  let str = s.split(" ");
  for (let item of str) {
    obj[item.slice(-1)] = item.slice(0, item.length - 1);
  }

  // the items in the obj will be in sorted order as the key
  str = "";

  for (let key in obj) {
    str += obj[key] + " ";
  }

  return str.trim();
};
