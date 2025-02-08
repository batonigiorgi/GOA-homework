def letter(s):
    for char in s:
        if s.count(char) == 1:  
            return char
    return None  


print(letter("ggiioorrggM"))  
print(letter("aabbcct"))    
