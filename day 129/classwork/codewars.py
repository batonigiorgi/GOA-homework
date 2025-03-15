
def elimination(arr):
    cheked = []  
    for num in arr:
        found = False
        for cheked_num in cheked:  
            if num == cheked_num:
                found = True
                break
        if found:
            return num  
        cheked += [num]  
    return None 