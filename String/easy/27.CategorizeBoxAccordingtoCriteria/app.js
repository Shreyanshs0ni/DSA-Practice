/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
categorizeBox = (
  l,
  w,
  h,
  m,
  B = (Math.max(l, w, h) >= 1e4) | (l * w * h >= 1e9)
) => (B & (m > 99) ? "Both" : B ? "Bulky" : m > 99 ? "Heavy" : "Neither");
