class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}
const arrToLL = (arr) => {
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
};
const printLL = (head) => {
  if (head === null) return null;
  let output = "";
  while (head !== null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output + "null");
};
const insertionBeforeValue = (head, target, value) => {
  const targetNode = new Node(target);
  if (value === head.value) {
    targetNode.next = head;
    return targetNode;
  }
  let current = head;

  while (current.next != null && current.next.value !== value) {
    current = current.next;
  }
  if (current.next === null) {
    console.log("value not found");
    return head;
  }
  targetNode.next = current.next; 
  current.next = targetNode;

  return head;
};

const arr = [1, 2, 3, 4, 5, 6];
let LL = arrToLL(arr);
printLL(LL); // 1->2->3->4->5->6->null

const target = 7;
const k = 6;
LL = insertionBeforeValue(LL, target, k);
printLL(LL); // 1->2->3->4->5->6->7->null
