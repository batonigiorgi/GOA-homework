def sum_dig_pow(a, b):
    result = []
    for number in range(a, b + 1):
        digits = str(number)
        total = 0
        position = 1
        for digit in digits:
            total += int(digit) ** position
            position += 1
        if total == number:
            result.append(number)
    return result