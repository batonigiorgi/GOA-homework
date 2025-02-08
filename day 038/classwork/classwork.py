def sum_two_smallest_numbers(numbers):
    return sorted(numbers)[0] + sorted(numbers)[1]

def find_smallest_int(arr):
    return min(arr)

def remove_smallest(numbers):
    if numbers:
        numbers.remove(min(numbers))
    return numbers

def string_to_number(s):
    return int(s)

def basic_op(operator, a, b):
    if operator == '+':
        return a + b
    elif operator == '-':
        return a - b
    elif operator == '*':
        return a * b
    elif operator == '/':
        return a / b
