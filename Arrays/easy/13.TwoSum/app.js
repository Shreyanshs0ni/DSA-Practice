function TwoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    const complement = target - num;
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(num, i);
  }
  return [];
}

const nums = [8, 7, 2, 15];
const target = 9;

const result = TwoSum(nums, target);
console.log(result); // Output: [0
