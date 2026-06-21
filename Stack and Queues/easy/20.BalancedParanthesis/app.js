function balancedParanthesis(s) {
  let stack = [];
  let map = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  for (let ch of s) {
    if (map.has(ch)) {
      if (stack.length === 0 || stack.pop() !== map.get(ch)) {
        return false;
      }
    } else if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}

console.log(balancedParanthesis("[ ( )"));
console.log(balancedParanthesis("( )[ { } ( ) ]"));
