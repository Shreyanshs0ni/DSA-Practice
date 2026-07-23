function helper(days, index, last) {
  if (index === 0) {
    let maxi = 0;
    for (let i = 0; i < 3; i++) {
      if (i !== last) {
        maxi = Math.max(maxi, days[0][i]);
      }
    }
    return maxi;
  }

  let maxi = 0;
  for (let i = 0; i < 3; i++) {
    if (i !== last) {
      let points = days[index][i] + helper(days, index - 1, i);
      maxi = Math.max(maxi, points);
    }
  }
  return maxi;
}

function ninjaTraining(days) {
  let n = days.length;
  return helper(days, n - 1, 3);
}

function main() {
  console.log(
    ninjaTraining([
      [10, 40, 70],
      [20, 50, 80],
      [30, 60, 90],
    ]),
  );

  console.log(
    ninjaTraining([
      [70, 40, 10],
      [180, 20, 5],
      [200, 60, 30],
    ]),
  );
}

main();
