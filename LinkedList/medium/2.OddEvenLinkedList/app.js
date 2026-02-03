/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let oddCurrent = head;
  let evenhead = head.next;
    let evenCurrent = evenhead;
    while (evenCurrent && evenCurrent.next) {
        oddCurrent.next = evenCurrent.next;
        oddCurrent = oddCurrent.next

        evenCurrent.next = oddCurrent.next;
        evenCurrent = evenCurrent.next
    }
    oddCurrent.next = evenhead;
    return head;
};

console.log(oddEvenList([1, 2, 3, 4, 5])); //[1,3,5,2,4]
console.log(oddEvenList([2, 1, 3, 5, 6, 4, 7])); //[2,3,6,7,1,5,4]
