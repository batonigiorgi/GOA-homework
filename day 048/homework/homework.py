def dig_pow(n, p):
    digits = [int(d) for d in str(n)]
    total = sum(d ** (p + i) for i, d in enumerate(digits))
    if total % n == 0:
        return total // n
    return -1



def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])



def solution(string, ending):
    return string.endswith(ending)
