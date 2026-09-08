def maximum(arr):
  maxNum = 0
  for i in arr:
    maxNum =max(maxNum, i)
  return maxNum

print(maximum([12, 5, 27, 8, 19]))