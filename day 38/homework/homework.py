#1
def filter_list(l):
    return [i for i in l if isinstance(i, int)]

#2
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

#3
def solution(string, ending):
    return string.endswith(ending)

#4
def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    return None

#5
def sum_array(arr):
    return sum(x for x in arr if x % 2 == 0), sum(x for x in arr if x % 2 != 0)

