def get_count(string):
    return sum(1 for char in string if char in 'aeiouAEIOU')


def find_smallest_int(arr):
    return min(arr)


def repeat_str(n, s):
    return s * n


def summation(num):
    return sum(range(1, num + 1))


def number_to_string(num):
    return str(num)


def remove_smallest(numbers):
    if not numbers:
        return []
    numbers.remove(min(numbers))
    return numbers


def find_uniq(arr):
    for num in arr:
        if arr.count(num) == 1:
            return num


def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positives = len([x for x in arr if x > 0])
    negatives = sum(x for x in arr if x < 0)
    return [positives, negatives]


def sum_array(a):
    return sum(a) if a else 0


def solution(string, ending):
    return string.endswith(ending)

