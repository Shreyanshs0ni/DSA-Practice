class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function linkedListToDecimal(head) {
  let res = 0;
  let current = head;
  while (current) {
    res = res * 2 + current.value;
    current = current.next;
  }
  return res;
}

let head = new Node(1, new Node(0, new Node(1)));

console.log(linkedListToDecimal(head));
