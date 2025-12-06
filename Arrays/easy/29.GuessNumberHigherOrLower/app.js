/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (s) => {
  const e = (s, u) => {
    const n = ((s + u) / 2) | 0;
    return 0 === guess(n) ? n : 1 === guess(n) ? e(n + 1, u) : e(s, n - 1);
  };
  return e(1, s);
};
