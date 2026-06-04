function sorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

let a = [1, 2, 3, 4, 5, 6];
let b = [2, 3, 42, 1, 3, 1, 3, 5];
console.log(sorted(a));
console.log(sorted(b));
