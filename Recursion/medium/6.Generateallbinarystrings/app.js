let res = [];
function generateAllBinaryStrings(n, curr, result) {
  if (curr.length === n) {
    result.push(curr);
    return;
  }
  generateAllBinaryStrings(n, curr + "0", result);

  if (curr.length === 0 || curr[curr.length - 1] !== "1") {
    generateAllBinaryStrings(n, curr + "1", result);
  }
}

function main() {
  let n = 3;
  let res = [];
  generateAllBinaryStrings(n, "", res);
  console.log(res);
}

main();
