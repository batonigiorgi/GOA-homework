def even_sum(numbers_list):
    sum_of_even = 0

    for number in numbers_list:
        if number % 2 == 0:
            sum_of_even = sum_of_even + number
    
    return sum_of_even



result = even_sum([1,2,3,4,5,6,7,8,9,10])

print(result)
            


