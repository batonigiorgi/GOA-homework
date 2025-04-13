def count_zeros(n):
    count = 0
    for i in range(1, n + 1):
        for char in str(i):
            if char == '0':
                count += 1
    return count