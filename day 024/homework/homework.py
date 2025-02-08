# 1
def number_to_string(num):
    return str(num)

#2
def hero(bullets, dragons):
    return bullets >= dragons * 2

#3
def invert(lst):
    return [-x for x in lst]

#4
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    count_positives = sum(1 for x in arr if x > 0)
    sum_negatives = sum(x for x in arr if x < 0)
    
    return [count_positives, sum_negatives]

#5
def sum_mix(arr):
    return sum(int(x) for x in arr)
