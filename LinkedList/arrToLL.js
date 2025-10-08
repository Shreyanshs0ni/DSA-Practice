import Node from "./LinkedListNode.js";

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

export default arrToLL;
