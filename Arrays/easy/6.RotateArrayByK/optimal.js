function reverse(arr, start, end) {
  let i = start;
  let j = end;
  while (j > i) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}
function rotateLeftByK(arr, k) {
  let n = arr.length - 1;
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, n);
  reverse(arr, 0, n);
  return arr;
}
function rotateRightByk(arr, k) {
  let n = arr.length - 1;
  k = k % arr.length;
  reverse(arr, 0, n);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n);
  return arr;
}

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5];
console.log(rotateLeftByK(a, 2));
console.log(rotateRightByk(b, 2));
