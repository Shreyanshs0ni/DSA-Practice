function studentsFulfilled(students, chocolates) {
  let res = 0;
  let numOfA = 0;
  let student = 0;

  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] === "B") {
      numOfA = 0;
    } else {
      numOfA++;
    }
    if (numOfA === students[student]) {
      res++;
      student++;
      numOfA = 0;
    }
  }

  return res;
}

console.log(
  studentsFulfilled(
    [1, 3, 2, 4],
    ["B", "A", "B", "A", "A", "A", "B", "A", "A", "B", "A", "A", "A", "A"],
  ),
);
