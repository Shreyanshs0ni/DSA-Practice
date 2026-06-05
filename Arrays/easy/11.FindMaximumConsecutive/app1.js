function maxConsecutiveOnes(arr) {
  let cnt = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt++;
      max = Math.max(cnt, max);
    } else {
      cnt = 0;
    }
  }
  return max;
}

let a = [1, 1, 2, 3, 4, 1, 1, 1];
console.log(maxConsecutiveOnes(a));
