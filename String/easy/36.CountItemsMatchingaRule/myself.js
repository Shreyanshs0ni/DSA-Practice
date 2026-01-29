/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let res = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      if (items[i][0] === ruleValue) {
        res += 1;
      }
    } else if (ruleKey === "color") {
      if (items[i][1] === ruleValue) {
        res += 1;
      }
    } else {
      if (items[i][2] === ruleValue) {
        res += 1;
      }
    }
  }
  return res;
};
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver",
  ),
); //1

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone",
  ),
); //2
