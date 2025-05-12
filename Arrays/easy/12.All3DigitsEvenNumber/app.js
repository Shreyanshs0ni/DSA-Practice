function findEvenNumbers(digits) {
  let result = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i === j || j === k || k === i) continue;

        const d1 = digits[i];
        const d2 = digits[j];
        const d3 = digits[k];
        if (d1 === 0) continue;
        if (d3 % 2 !== 0) continue;

        let num = d1 * 100 + d2 * 10 + d3;
        result.add(num);
      }
    }
  }
  return Array.from(result).sort((a, b) => a - b);
}

const arr1 = [1, 2, 3];
console.log(findEvenNumbers(arr1));
