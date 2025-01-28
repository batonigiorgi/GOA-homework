string = "abcabcbb"
longest = ""
curent = ""

for i in string:
    if i in curent:
        curent = curent[curent.index(i) + 1:]
    curent += i
    if len(curent) > len(longest):
        longest = curent

print(longest)