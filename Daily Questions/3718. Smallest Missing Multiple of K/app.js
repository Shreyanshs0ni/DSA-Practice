function missingMultiple(nums, k) {
  let set = new Set();
  for (const num of nums) {
    if (num % k === 0) {
      set.add(num);
    }
  }

  let multiple = k;

  while (set.has(multiple)) {
    multiple += k;
  }

  return multiple;
}

console.log(missingMultiple([8, 2, 3, 4, 6], 2)); //10
console.log(missingMultiple([1, 4, 7, 10, 15], 5)); //5
