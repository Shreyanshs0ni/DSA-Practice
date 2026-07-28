function minimumProcessingTime(processorTime, tasks) {
  tasks.sort((a, b) => b - a);
  processorTime.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < processorTime.length; i++) {
    max = Math.max(max, processorTime[i] + tasks[i * 4]);
  }
  return max;
}

console.log(minimumProcessingTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5]));
console.log(minimumProcessingTime([10, 20], [2, 3, 1, 2, 5, 8, 4, 3]));
