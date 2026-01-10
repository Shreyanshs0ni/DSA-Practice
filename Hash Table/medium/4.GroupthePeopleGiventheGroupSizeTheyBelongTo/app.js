/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < groupSizes.length; i++) {
    if (!map.has(groupSizes[i])) {
      map.set(groupSizes[i], [i]);
    } else {
      map.get(groupSizes[i]).push(i);
    }
  }
  for (let [size, indices] of map.entries()) {
    for (let i = 0; i < indices.length; i += size) {
      res.push(indices.slice(i, i + size));
    }
  }
  return res;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); //[[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([2, 1, 3, 3, 3, 2])); //[[1],[0,5],[2,3,4]]
