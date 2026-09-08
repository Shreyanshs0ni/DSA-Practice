def countOccur(arr, target):
  count = 0
  for i in arr:
    if i == target:
      count+=1
  return count



print(countOccur([2, 5, 2, 8, 2, 9],2))
