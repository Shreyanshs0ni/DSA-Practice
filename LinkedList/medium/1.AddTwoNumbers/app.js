/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let t1 = l1;
  let t2 = l2;
  let dummy = new ListNode(-1);
  let current = dummy;
  let carry = 0;
  while (t1 !== null || t2 !== null || carry > 0) {
    let sum = carry;
    if (t1 !== null) {
      sum += t1.val;
      t1 = t1.next;
    }
    if (t2 !== null) {
      sum += t2.val;
      t2 = t2.next;
    }
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummy.next;
};
