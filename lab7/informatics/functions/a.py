def min_int(a, b, c, d ):
    return min([a,b,c,d])

arr = [int(i) for i in input().split()]
print(min_int(arr[0], arr[1], arr[2], arr[3]))