var getDecimalValue = function (head) {
  let ans = 0;
  if (head.next === null) return head.val;
  let current = head;
  while (current !== null) {
    ans = ans * 2 + current.val;
    current = current.next;
  }

  return ans;
};
