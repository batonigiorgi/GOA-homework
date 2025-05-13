
def string_to_int_list(s):
    result = []
    parts = s.split(",")         
    
    for part in parts:
        if part != "":         
            result.append(int(part))  
            
    return result


def remove_exclamation_marks(s):
    result = ""
    for char in s:
        if char != "!":
            result += char
    return result




def remove_every_other(my_list):
    result = []
    i = 0
    while i < len(my_list):
        result.append(my_list[i])
        i += 2
    return result