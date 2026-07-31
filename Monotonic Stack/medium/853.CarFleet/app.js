function carFleet(target, position, speed) {
  if (position.length === 0) return 0;

  let sortedArray = position.map((pos, index) => {
    return [pos, (target - pos) / speed[index]];
  });

  sortedArray.sort((a, b) => b[0] - a[0]);

  let lastArrivalTime = sortedArray[0][1];
  let fleet = 1;

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i][1] <= lastArrivalTime) {
      continue;
    } else {
      fleet++;
      lastArrivalTime = sortedArray[i][1];
    }
  }
  return fleet;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
