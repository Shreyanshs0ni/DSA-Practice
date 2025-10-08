class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}
function arrToLL(arr) {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 0; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}
function printLL(head) {
  let output = "";
  while (head !== null) {
    output += head.val + "->";
    head = head.next;
  }
  console.log(output);
}
function insertAtK(head, target, k) {
  const targetNode = new Node(target);

  //inseert at head
  if (k === 1) {
    targetNode.next = head;
    return targetNode;
  }
  let current = head;
  let count = 1;

  while (current !== null && count < k - 1) {
    current = current.next;
    count++;
  }
  if (current === null) {
    console.log("Postion out of bound");
    return head;
  }
  targetNode.next = current.next;
  current.next = targetNode;

  return head;
}

const arr = [1, 2, 3, 4, 5, 6];
let LL = arrToLL(arr);
printLL(LL); // 1->2->3->4->5->6->null

const target = 7;
const k = 3;
LL = insertAtK(LL, target, k);
printLL(LL); // 1->2->3->4->5->6->7->null
