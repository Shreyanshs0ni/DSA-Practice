const majorityElement = (nums) => {
  let count = 0;
  let elem = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      elem = nums[i];
    }
    nums[i] === elem ? count++ : count--;
  }
  return elem;
};

console.log(majorityElement([3, 2, 3, 2, 2]));
console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([1, 1, 1, 2, 1, 2]));
