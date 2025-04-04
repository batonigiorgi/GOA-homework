def string_clean(s):
    result = ''
    for char in s:
        if not char.isdigit():
            result += char
    return result
