def maxMin(arr):
  maxNum = float("-inf")
  minNum = float("inf")
  for i in arr:
    maxNum = max(maxNum, i)
    minNum = min(minNum, i)
  return [maxNum, minNum]

print(maxMin([1, 2, 3, 4, 5]))