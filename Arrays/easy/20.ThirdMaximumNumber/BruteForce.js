const thirdMax = (nums) => {
  // Remove duplicates
    let unique = [...new Set(nums)];
    
  unique.sort((a, b) => a - b);

  if (unique.length < 3) {
    return unique[unique.length - 1];
  }

  return unique[unique.length - 3];
};

console.log(thirdMax([3, 2, 1, 2, 3])); // Output: 1
console.log(thirdMax([2, 2, 3])); // Output: 3
console.log(thirdMax([1, 2])); // Output: 2
