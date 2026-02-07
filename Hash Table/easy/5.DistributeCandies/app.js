/**¯
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let n = candyType.length / 2;
  let map = new Map();
  for (let candy of candyType) {
    map.set(candy, (map.get(candy) || 0) + 1);
  }
  if (map.size <= n) {
    return map.size;
  } else {
    return n;
  }
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); //3
console.log(distributeCandies([1, 1, 2, 3])); //2
console.log(distributeCandies([6, 6, 6, 6])); //1
