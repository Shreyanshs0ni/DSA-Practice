function findLargest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
function findSmallest(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

function secondLargest(arr, max) {
  let secondMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax === Number.MIN_SAFE_INTEGER ? -1 : secondMax;
}

function secondSmallest(arr, min) {
  let secondMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }
  return secondMin === Number.MAX_SAFE_INTEGER ? -1 : secondMin;
}

let a = [1, 2, 4, 5, 6, 7, 7];
let b = [7, 7, 7, 7, 7];

let maxA = findLargest(a);
let minA = findSmallest(a);

console.log(secondLargest(a, maxA));
console.log(secondSmallest(a, minA));

let maxB = findLargest(b);
let minB = findSmallest(b);

console.log(secondLargest(b, maxB));
console.log(secondSmallest(b, minB));
