/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => ({
  toBe: (a) =>
    val === a
      ? true
      : (() => {
          throw new Error("Not Equal");
        })(),
  notToBe: (b) =>
    val !== b
      ? true
      : (() => {
          throw new Error("Equal");
        })(),
});

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
