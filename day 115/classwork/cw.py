def sum_array(arr):
    if not arr or len(arr) <= 2:
        return 0  

    return sum(arr) - min(arr) - max(arr)