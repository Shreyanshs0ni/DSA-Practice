def sum(arr):
  sum = 0
  for i in range(len(arr)):
    sum+=arr[i]
  return sum    


print(sum([4, 7, 2, 9, 1]))