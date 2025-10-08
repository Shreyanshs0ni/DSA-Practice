class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
const arrToLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
};
const printLL = (head) => {
  let output = [];

  while (head != null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output);
};
const tortoiseAndHare = (head) => {
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const arr = [1, 2, 3, 4, 5];
const ll = arrToLL(arr);
printLL(ll);
const mid = tortoiseAndHare(ll);
console.log(mid);
