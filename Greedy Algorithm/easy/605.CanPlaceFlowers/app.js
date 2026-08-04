function canPlaceFlowers(flowerBed, n) {
  let i = 0;
  let count = 0;
  while (i < flowerBed.length) {
    if (count >= n) return true;
    let left = i === 0 ? 0 : flowerBed[i - 1];
    let right = i === flowerBed.length - 1 ? 0 : flowerBed[i + 1];
    if (left === 0 && right === 0 && flowerBed[i] === 0) {
      flowerBed[i] = 1;
      count++;
    }
    i++;
  }
  return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
