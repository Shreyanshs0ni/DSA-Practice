/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < friends.length; i++) {
    map.set(friends[i], i);
  }
  for (let i = 0; i < order.length; i++) {
    if (map.has(order[i])) {
      res.push(order[i]);
    }
  }
  return res;
};

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4]));
