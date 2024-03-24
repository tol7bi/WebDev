a = int(input())
arr = [int(i) for i in input().split()]
for i in arr:
    if i % 2 == 0:
        print(i, end=" ")
