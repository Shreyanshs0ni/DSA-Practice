/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let res = 0;
  for (let detail of details) {
    const gender = detail[10];
    if (!gender === "M" || !gender === "F") continue;
    const age = Number(detail.slice(11, 13));
    age > 60 ? res++ : res;
  }
  return res;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]),
); //2

console.log(countSeniors(["1313579440F2036", "2921522980M5644"])); //0
