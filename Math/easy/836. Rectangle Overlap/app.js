/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  if (rec2[0] >= rec1[2]) return false; // rec2 is right
  if (rec2[2] <= rec1[0]) return false; // rec2 is left
  if (rec2[1] >= rec1[3]) return false; // rec2 is above
  if (rec2[3] <= rec1[1]) return false; // rec2 is below

  return true;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])); //true
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])); //false
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])); //false
console.log(isRectangleOverlap([2, 17, 6, 20], [3, 8, 6, 20])); //true
