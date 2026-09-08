def secondLargest(arr):
  largest = max(arr)
  secondLargest = float("-inf")
  for i in arr:
    if i > secondLargest and i < largest:
      secondLargest = i
  return secondLargest

print(secondLargest([10, 5, 20, 8, 15]))