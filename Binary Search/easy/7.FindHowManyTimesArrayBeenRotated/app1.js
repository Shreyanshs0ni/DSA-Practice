function numberOfRotation(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

const a = [4, 5, 6, 7, 0, 1, 2, 3];
const b = [3, 4, 5, 1, 2];

console.log(numberOfRotation(a));
console.log(numberOfRotation(b));
