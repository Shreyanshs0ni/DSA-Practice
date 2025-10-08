function findLargestOdd(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
}

const nums = "47266380";
console.log(findLargestOdd(nums));
