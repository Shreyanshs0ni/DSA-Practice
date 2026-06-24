function jump(arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > maxIndex) {
      return false;
    }

    maxIndex = Math.max(maxIndex, i + arr[i]);
  }
  return true;
}

function main() {
  console.log(jump([2, 3, 1, 0, 4]));
  console.log(jump([3, 2, 1, 0, 4]));
}

main();
