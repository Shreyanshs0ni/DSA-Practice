/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const hexas = {
    0: 0,
    6: 6,
    10: "a",
    1: 1,
    7: 7,
    11: "b",
    2: 2,
    8: 8,
    12: "c",
    3: 3,
    9: 9,
    13: "d",
    4: 4,
    14: "e",
    5: 5,
    15: "f",
  };
  if (num >= 0 && num <= 15) return hexas[num].toString();
  if (num < 0) num = num >>> 0;

  let newArr = [];
  while (num >= 16) {
    let rest = num % 16;
    newArr.unshift(hexas[rest]);
    num = Math.floor(num / 16);
  }
  newArr.unshift(hexas[num]);
  return newArr.join("");
};

console.log(toHex(-1));
