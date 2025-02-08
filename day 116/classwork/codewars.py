def bin_rota(arr):
    order = [] 
    row_count = len(arr)
    for i in range(row_count): 
        if i % 2 == 0:
            for j in arr[i]:
                order.append(j)
        else:
            for j in reversed(arr[i]):
                order.append(j)
    return order