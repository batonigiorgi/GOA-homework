def who_is_paying(name):
    if len(name) <= 2:
        return [name]
    else:
        first_char = name[0]
        second_char = name[1]
        short_name = first_char + second_char
        return [name, short_name]
    