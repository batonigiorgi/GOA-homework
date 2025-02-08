def clean_string(s):
    result = []
    for char in s:
        if char == '#':
            if result:
                result.pop() 
        else:
            result.append(char)
    return ''.join(result)



def number(lines):
    numbered_lines = []
    line_number = 1

    for line in lines:
        numbered_line = str(line_number) + ": " + line
        numbered_lines.append(numbered_line)
        line_number += 1

    return numbered_lines



def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    for letter in alphabet:
        if letter not in st:
            return False
    return True



    