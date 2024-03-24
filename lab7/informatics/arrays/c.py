a = int(input())
arr = [int(i) for i in input().split()]
cnt = 0
for i in arr:
    if i >= 0:
        cnt += 1
print(cnt)
