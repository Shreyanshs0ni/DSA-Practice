function helper(s, index, current, result) {
  if (index === s.length) {
    result.push(current.join(""));
    return;
  }
  helper(s, index + 1, current, result);
  current.push(s[index]);
  helper(s, index + 1, current, result);
  current.pop();
}

function getSubsequences(s) {
  let result = [];
  const current = [];
  helper(s, 0, current, result);
  return result;
}

console.log(getSubsequences("abc"));
