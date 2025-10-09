/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let l = 0;
  let max_len = 0;
  const map = new Map();

  for (let r = 0; r < fruits.length; r++) {
    // Add current fruit to map (or increase count)
    map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

    // If we have more than 2 types, shrink window from left
    while (map.size > 2) {
      map.set(fruits[l], map.get(fruits[l]) - 1);
      if (map.get(fruits[l]) === 0) map.delete(fruits[l]);
      l++;
    }

    // Update maximum window size
    max_len = Math.max(max_len, r - l + 1);
  }

  return max_len;
};
