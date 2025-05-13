def sum_dig_pow(a, b):
    result = []
    for number in range(a, b + 1):
        digits = str(number)
        total = 0
        for i, digit in enumerate(digits):
            total += int(digit) ** (i + 1)
        if total == number:
            result.append(number)
    return result

def str_count(string, letter):
    return string.count(letter)


def triple_trouble(one, two, three):
    result = ''
    for i in range(len(one)):
        result += one[i] + two[i] + three[i]
    return result


def opposite(number):
    return -number



