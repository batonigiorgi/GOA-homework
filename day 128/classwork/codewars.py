def smallest_integer(matrix):
    a = []
    for x in matrix:
        a += x
    i = 0
    while True:
        if i not in a:
            return i
        i += 1