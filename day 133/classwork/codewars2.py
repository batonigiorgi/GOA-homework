def remove_smallest(numbers):
    if not numbers:  
        return []

    min_value = min(numbers)  
    min_index = numbers.index(min_value)  

    new_list = [] 
    for i in range(len(numbers)): 
        if i != min_index:
            new_list.append(numbers[i]) 

    return new_list