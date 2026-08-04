var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

console.log(topKFrequent([1], 1));

console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
