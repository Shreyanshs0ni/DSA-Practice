def isSorted(arr):
  for i in range(len(arr)-1):
    if arr[i] > arr[i+1]:
      return False
  return True



print(isSorted([1, 5, 3, 7, 9]))
print(isSorted([1, 3, 5, 7, 9]))