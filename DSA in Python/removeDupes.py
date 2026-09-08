def removeDupes(arr):
  unique = set()
  for i in arr:
    unique.add(i)
  return [*unique]


print(removeDupes( [1, 2, 2, 3, 4, 4, 5]))