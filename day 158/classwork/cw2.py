def find_outlier(integers):
    sample = integers[:3]
    evens = [x for x in sample if x % 2 == 0]
    majority_even = len(evens) >= 2

    for num in integers:
        if majority_even and num % 2 != 0:
            return num
        if not majority_even and num % 2 == 0:
            return num
