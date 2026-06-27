const majorityElement = (nums) => {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let target = Math.floor(nums.length / 2);
  for (let i of map.keys()) {
    if (map.get(i) > target) {
      return i;
    }
  }
  return -1;
};

console.log(majorityElement([3, 2, 3, 2, 2]));
console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]));
console.log(majorityElement([1, 1, 1, 2, 1, 2]));
