def round_to_five(arr):
    result = []
    for num in arr:
        rounded = int((num + 2.5) // 5) * 5
        result.append(rounded)
    return result