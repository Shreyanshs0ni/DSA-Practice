/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let pos = 0;
  for (let command of commands) {
    if (command === "RIGHT") {
      pos++;
    } else if (command === "LEFT") {
      pos--;
    } else if (command === "DOWN") {
      pos += n;
    } else {
      pos -= n;
    }
  }
  return pos;
};

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"])); //3
console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"])); //1
