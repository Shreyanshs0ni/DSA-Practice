function isValid(s) {
  let count = 0;
  for (let ch of s) {
    if (ch === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

function generate(current, n, result, open, close) {
  if (current.length === 2 * n) {
    if (isValid(current)) {
      result.push(current);
    }
    return;
  }

  generate(current + "(", n, result);
  generate(current + ")", n, result);
}

function main() {
  let n = 3;
  let res = [];
  generate("", n, res);
  console.log(res);
}

main();
