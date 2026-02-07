/**¯
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const n = candyType.length / 2;
  const uniqueType = new Set(candyType).size;
  return Math.min(uniqueType, n);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); //3
console.log(distributeCandies([1, 1, 2, 3])); //2
console.log(distributeCandies([6, 6, 6, 6])); //1
