var climbStairs = function (n) {
  let prev = 1;
  let prev2 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return prev;
};

console.log(climbStairs(3));

//tc -> O(n)
//sc -> O(1)
