//Hash Table
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = Array.from({ length: 9 }, () => new Set());
  let colSet = Array.from({ length: 9 }, () => new Set());
  let blockSet = Array.from({ length: 9 }, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];

      if (value === ".") {
        continue;
      }
      let blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (
        rowSet[i].has(value) ||
        colSet[j].has(value) ||
        blockSet[blockIndex].has(value)
      ) {
        return false;
      }

      rowSet[i].add(value);
      colSet[j].add(value);
      blockSet[blockIndex].add(value);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
