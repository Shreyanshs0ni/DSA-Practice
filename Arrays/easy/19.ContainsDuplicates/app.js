const containDuplicates = (nums) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    if (map.has(v)) return true;
    map.set(v, true);
  }
  return false;
};


console.log(containDuplicates([1,2,3,4,]))