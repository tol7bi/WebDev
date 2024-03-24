def print_formatted(number):
   for i in range(1, number+1):
       print(f'{i} {oct(i).lstrip('0o')} {hex(i).lstrip('0x').capitalize()}  {bin(i).lstrip('0b')}')

n = int(input())
print_formatted(n)