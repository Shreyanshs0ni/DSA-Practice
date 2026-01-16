/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (let h of hours) {
    if (h >= target) count++;
  }
  return count;
};
