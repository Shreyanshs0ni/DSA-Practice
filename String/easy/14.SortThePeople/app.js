/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let pairedArr = [];
  let res = [];
  for (let i = 0; i < names.length; i++) {
    pairedArr.push([names[i], heights[i]]);
  }
  let sorted = [...pairedArr.sort((a, b) => b[1] - a[1])];
  for (let i = 0; i < sorted.length; i++) {
    res.push(sorted[i][0]);
  }
  return res;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
