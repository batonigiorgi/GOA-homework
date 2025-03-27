def even_numbers(arr, n):
    evens = []  
    
    for num in arr:
        if num % 2 == 0: 
            evens.append(num) 
    
    return evens[-n:] 