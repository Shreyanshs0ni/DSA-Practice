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
  let output = "";
  while (head != null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output);
};

const removeDuplicates = (head) => {
  if (head == null || head.next == null) return head;
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5];
const head = arrToLL(arr);
printLL(head);
const head2 = removeDuplicates(head);
printLL(head2);
