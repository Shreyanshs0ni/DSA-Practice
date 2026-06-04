function rotateByK(arr, k) {
  for (let j = 0; j < k; j++) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}

let a = [1, 2, 3, 4, 5, 6];
console.log(rotateByK(a, 5));
