def multiply(a, b):
    return a * b


def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positives = len([x for x in arr if x > 0])
    negatives = sum(x for x in arr if x < 0)
    return [positives, negatives]


import re

def validate_usr(username):
    return bool(re.match(r'^[a-zA-Z0-9_]{4,16}$', username))


def string_to_number(s):
    return int(s)


def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(range(begin_number, end_number + 1, step))


def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(range(begin_number, end_number + 1, step))


def is_palindrome(st):
    return st == st[::-1]


