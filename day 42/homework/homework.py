def find_it(seq):
    for i in set(seq):
        if seq.count(i) % 2 != 0:
            return i




def monkey_count(n):
    return list(range(1, n + 1))




def shortcut(s):
    vowels = "aeiou"
    return ''.join([char for char in s if char not in vowels])
