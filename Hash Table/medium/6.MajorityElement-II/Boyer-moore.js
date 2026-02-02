/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n = Math.floor(nums.length / 3);
  let cand1 = 0;
  let cand2 = 0;
  let count1 = 0;
  let count2 = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (count1 === 0) {
      cand1 = nums[i];
      count1 = 1;
    } else if (count2 === 0) {
      cand2 = nums[i];
      count2 = 1;
    } else if (nums[i] === cand1) {
      count1++;
    } else if (nums[i] === cand2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === cand1) {
      count1++;
    } else if (num === cand2) {
      count2++;
    }
  }
  if (count1 > n) res.push(cand1);
  if (count2 > n) res.push(cand2);
  return res;
};

console.log(majorityElement([3, 2, 3])); //[3]
console.log(majorityElement([1])); //[1]
console.log(majorityElement([1, 2])); //[1,2]
