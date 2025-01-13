def to_underscore(strng):
    if isinstance(strng, int) or strng.isdigit():
        return str(strng)
    
    result = []
    
    for i, char in enumerate(strng):
        if char.isupper():
            if i > 0:
                result.append('_')
            result.append(char.lower())
        else:
            result.append(char)
    
    return ''.join(result)