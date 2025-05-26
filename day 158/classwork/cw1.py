def find_uniq(arr):
    if arr[0] != arr[1] and arr[0] != arr[2]:
        return arr[0]
    common = arr[0] if arr[0] == arr[1] else arr[2]

    for num in arr:
        if num != common:
            return num
