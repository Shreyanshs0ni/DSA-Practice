/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let left = 0;
  let right = 0;
  let nameArr = [...name];
  let typedArr = [...typed];
  if (typedArr.length < nameArr.length) return false;
  while (left < nameArr.length || right < typedArr.length) {
    if (nameArr[left] === typedArr[right]) {
      right++;
      left++;
    } else if (typedArr[right] === nameArr[left - 1]) {
      right++;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
