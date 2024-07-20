def odd_index_sum(numbers):
    odd_index_sum = 0
    for i in range(len(numbers)):
        if i % 2 != 0: 
            odd_index_sum += numbers[i]
    return odd_index_sum

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = odd_index_sum(numbers)
print(result)  