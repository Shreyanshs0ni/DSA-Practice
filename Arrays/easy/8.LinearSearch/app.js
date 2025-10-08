function linearSearch(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      break;
    }
  }
  return i;
}

const arr1 = [1, 2, 3, 21, 5, 6, 7];
const num1 = 21;
let result = linearSearch(arr1, num1);
console.log(result);
