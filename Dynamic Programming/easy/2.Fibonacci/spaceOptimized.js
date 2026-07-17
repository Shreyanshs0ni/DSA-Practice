function fib(n) {
  let prev = 1;
  let prev2 = 0;
  for (let i = 2; i <= n; i++) {
    let curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return prev;
}

console.log(fib(3));

// tc -> O(n)
// sc -> O(1)
