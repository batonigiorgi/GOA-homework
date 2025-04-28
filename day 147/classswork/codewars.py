def matrixfy(st):
    if st == "":
        return "name must be at least one letter"
    
    n = len(st)
    size = 0
    while size * size < n:
        size += 1
        
    while len(st) < size * size:
        st += "."
        
    result = []
    i = 0
    while i < len(st):
        row = []
        j = 0
        while j < size:
            row.append(st[i])
            i += 1
            j += 1
        result.append(row)
        
    return result
