function generate(current, n, result, open, close) {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }
  if (open < n) {
    generate(current + "(", n, result, open + 1, close);
  }
  if (close < open) {
    generate(current + ")", n, result, open, close + 1);
  }
}

function main() {
  let n = 3;
  let res = [];
  let open = 0;
  let close = 0;
  generate("", n, res, open, close);
  console.log(res);
}

main();
