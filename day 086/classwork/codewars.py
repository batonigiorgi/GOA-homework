def find_it(seq):
    for i in seq:  
        count = 0  
        for j in seq:  
            if i == j: 
                count += 1  
        if count % 2 != 0:  
            return i  