function reverseArray(arr, start, end) {
  while (start <= end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArrayByK(arr, k) {
  k = k % arr.length;

  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const d = 4;
let result = rotateArrayByK(arr1, d);
console.log(result);
