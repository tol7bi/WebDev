a = int(input())
arr = [0 if int(i) > 0 else 1 for i in input().split()]
for i in range(a - 1):
    if arr[i] == arr[i + 1]:
        print('YES')
        exit()
print('NO')