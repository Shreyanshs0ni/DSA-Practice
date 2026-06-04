function moveZeros(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return arr;

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

let a = [1, 2, 3, 4, 0, 0, 0, 3, 4, 0, 0, 3, 4, 5];
console.log(moveZeros(a));
