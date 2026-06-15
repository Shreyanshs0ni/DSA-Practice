function goodNumber(s) {
  let ans = 5;
  for (let i = 1; i < s; i++) {
    if (i % 2 === 0) {
      ans = ans * 5;
    } else {
      ans = ans * 4;
    }
  }
  return ans;
}

console.log(goodNumber(1));
console.log(goodNumber(2));
