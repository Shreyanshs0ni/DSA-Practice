/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let bulky = false;
  let heavy = false;
  if (
    Math.max(length, width, height) >= 1e4 ||
    length * width * height >= 1e9
  ) {
    bulky = true;
  }
  if (mass >= 100) {
    heavy = true;
  }

  return heavy ? (bulky ? "Both" : "Heavy") : bulky ? "Bulky" : "Neither";
  //   if (heavy && bulky) return "Both";
  //   if (heavy && !bulky) return "Heavy";
  //   if (!heavy && bulky) return "Bulky";

  //   return "Neither";
};

console.log(categorizeBox(1000, 35, 700, 300));
console.log(categorizeBox(200, 50, 800, 50));
