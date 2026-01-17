/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let rich = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    rich = Math.max(rich, wealth);
  }
  return rich;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); //6

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); //10
