function uniquePaths(m, n) {
  let prev = [];

  for (let i = 0; i < m; i++) {
    let curr = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) curr[j] = 1;
      else {
        let up = 0;
        let left = 0;
        if (i > 0) up = prev[j];
        if (j > 0) left = curr[j - 1];
        curr[j] = up + left;
      }
    }
    prev = curr;
  }
  return prev[n - 1];
}

const m = 3;
const n = 7;

console.log(uniquePaths(m, n)); // 28
