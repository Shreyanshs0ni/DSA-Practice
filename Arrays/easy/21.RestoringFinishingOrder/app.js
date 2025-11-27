/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  let map = new Map();
  for (let elem of order) {
    let idx = friends.indexOf(elem);
    if (idx !== -1) {
      map.set(elem, idx);
    } else {
      continue;
    }
  }
  let res = [...map.keys()];
  return res;
};

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4]));
