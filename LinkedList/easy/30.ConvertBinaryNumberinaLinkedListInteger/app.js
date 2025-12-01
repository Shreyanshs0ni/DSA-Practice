/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let arr = [];
  let ans = 0;
  if ((head.next = null)) return null;
  let current = head;
  while (!current === null) {
    arr.push(current.val);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ans += Math.pow(2, length - 1 - i);
    } else {
      continue;
    }
  }
  return ans;
};

console.log(getDecimalValue());
