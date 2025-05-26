def to_camel_case(s):
    words = s.split()
    if not words:
        return ''
    return words[0].lower() + ''.join(word.capitalize() for word in words[1:])
