def to_camel_case(s):
    return ''.join(word.capitalize() for word in s.split())



def to_weird_case(s):
    def weird_word(word):
        return ''.join(
            char.upper() if i % 2 == 0 else char.lower()
            for i, char in enumerate(word)
        )
    
    return ' '.join(weird_word(word) for word in s.split())



def clean_string(s):
    result = []
    for char in s:
        if char == '#':
            if result:
                result.pop() 
        else:
            result.append(char)
    return ''.join(result)