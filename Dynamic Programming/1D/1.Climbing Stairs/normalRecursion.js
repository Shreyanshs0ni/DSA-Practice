var climbStairs = function (index) {
  if (index === 0) return 1;
  if (index === 1) return 1;

  let left = climbStairs(index - 1);
  let right = climbStairs(index - 2);
  return left + right;
};

console.log(climbStairs(3));

//tc -> O(2^n)
//sc -> O(n)
