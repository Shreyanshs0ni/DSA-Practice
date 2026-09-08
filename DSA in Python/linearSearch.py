def linearSearch(arr, target):
  for i in range(len(arr)):
    if arr[i] == target:
      return i
  return -1
  

print(linearSearch([10, 25, 7, 18, 30],18))
