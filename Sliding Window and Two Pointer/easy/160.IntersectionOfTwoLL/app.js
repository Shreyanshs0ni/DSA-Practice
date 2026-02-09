// Linked List Node definition
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// Helper to print list from any node
function printList(node) {
  let res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  console.log(res.join(" -> "));
}

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

// Create intersecting linked lists
let common = new ListNode(8);
common.next = new ListNode(10);

let headA = new ListNode(3);
headA.next = new ListNode(7);
headA.next.next = common; // intersection

let headB = new ListNode(99);
headB.next = new ListNode(1);
headB.next.next = common; // intersection

// Print both lists
console.log("List A:");
printList(headA);
console.log("List B:");
printList(headB);

// Run the function
let result = getIntersectionNode(headA, headB);

if (result) console.log("Intersection at node:", result.val);
else console.log("No intersection");
