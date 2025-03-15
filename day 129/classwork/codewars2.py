def replace_exclamation(st):
    vowels = "aeiouAEIOU"
    result = ""
    
    for char in st:
        if char in vowels:
            result = result + "!"  
        else:
            result = result + char  

    return result