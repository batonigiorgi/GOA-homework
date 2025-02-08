def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])


def count_positives_sum_negatives(arr):
    if not arr:
        return []
    positives = len([x for x in arr if x > 0])
    negatives = sum(x for x in arr if x < 0)
    return [positives, negatives]
