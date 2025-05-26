const reduce = (nums, fn, init) => {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i], i, nums);
  }
  return res;
};

const sum = (accum, curr) => {
  let res = accum;
  return res + curr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reduce(arr, sum, 0));
