const generate = (numRows) => {
  let triangle = [];
  if (numRows === 0) return triangle;
  triangle.push([1]);
  for (let row = 1; row < numRows; row++) {
    let newRow = [1];
    let prevRow = triangle[row - 1];

    for (let j = 1; j < row; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
};

console.log(generate(5));
