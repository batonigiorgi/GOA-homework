def array_diff(a, b):
    result = [] 
    for i in a:  
        found = False  
        for j in b:  
            if i == j:  
                found = True  
                break 
        if not found:  
            result.append(i)  
    return result 