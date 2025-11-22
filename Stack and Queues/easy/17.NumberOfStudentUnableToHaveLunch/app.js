/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let queue = [...students];
  let i = 0;
  let rotation = 0;

  while (queue.length > 0 && rotation < queue.length) {
    if (queue[0] === sandwiches[i]) {
      queue.shift();
      i++;
      rotation = 0;
    } else {
      queue.push(queue.shift());
      rotation++;
    }
  }
  return queue.length;
};

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
