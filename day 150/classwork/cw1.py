def is_vow(inp):
    vowels = ['a', 'e', 'i', 'o', 'u']
    
    result = []
    
    for number in inp:
        letter = chr(number)
        
        if letter in vowels:
            result.append(letter) 
        else:
            result.append(number)  
    
    return result