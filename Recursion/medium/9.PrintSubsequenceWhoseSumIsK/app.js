function printS(index, ds, sum, arr, s) {
  if (index === arr.length) {
    if (s === sum) {
      for (let num of ds) {
        console.log(num);
      }
    }
    return;
  }
  ds.push(arr[index]);
  s += arr[index];
    printS(index + 1, ds, sum, arr, s);
    
  s -= arr[index];
  ds.pop();
  printS(index + 1, ds, sum, arr, s);
}

printS(0, [], 2, [1, 2, 1], 0);
