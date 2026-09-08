def evenNumbers(arr):
  count = 0
  for i in arr:
    if i%2==0:
      count+=1
  return count

print(evenNumbers([3, 8, 12, 5, 7, 10]))