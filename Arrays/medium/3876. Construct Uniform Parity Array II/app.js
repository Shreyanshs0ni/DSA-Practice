/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  let min = Math.min(...nums1);
  if (min % 2 === 0) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] % 2 !== 0) {
        return false;
      }
    }
    return true;
  } else {
    return true;
  }
};

console.log(uniformArray([1, 4, 7]));
console.log(uniformArray([2, 3]));
