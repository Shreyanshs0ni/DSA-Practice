/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  let count = 0;

  for (const item of items) {
    if (item[keyIndex] === ruleValue) {
      count++;
    }
  }

  return count;
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
