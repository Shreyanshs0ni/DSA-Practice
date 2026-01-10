/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let map = new Map();
  for (let answer of answers) {
    map.set(answer, (map.get(answer) || 0) + 1);
  }
  let total = 0;
  for (let [x, count] of map.entries()) {
    let groupSize = x + 1;
    let groups = Math.ceil(count / groupSize);
    total += groups * groupSize;
  }
  return total;
};

console.log(numRabbits([1, 1, 2])); //5
console.log(numRabbits([10, 10, 10])); //11
