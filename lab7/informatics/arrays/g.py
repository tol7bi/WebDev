a = int(input())
arr = [int(i) for i in input().split()]

while a > 0:
    print(arr[a-1], end=" ")
    a-=1