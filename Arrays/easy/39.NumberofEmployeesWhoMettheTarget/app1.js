/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let res = 0;
  for (let hour of hours) {
    if (hour >= target) {
      res++;
    }
  }
  return res;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)); //3
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)); //0
