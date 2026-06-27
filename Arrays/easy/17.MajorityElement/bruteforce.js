const majorityElement = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }

    if (count > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
  return -1;
};

console.log(majorityElement([3, 2, 3, 2, 2]));
console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([1, 1, 1, 2, 1, 2]));
