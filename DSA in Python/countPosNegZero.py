# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
def countPosNegZero(arr):
  posCount = 0
  negCount = 0
  zeroCount = 0
  for i in arr:
    if i > 1:
      posCount += 1
    elif i < 0:
      negCount +=1
    else:
      zeroCount +=1
  return [posCount, negCount, zeroCount]

print(countPosNegZero([4, -2, 0, 7, -5, 0, 3]))