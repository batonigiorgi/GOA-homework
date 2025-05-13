
def is_opposite(s1, s2):
    if s1 == "" and s2 == "":
        return False
    if len(s1) != len(s2):
        return False
    index = 0
    while index < len(s1):
        a = s1[index]
        b = s2[index]
        if a.lower() != b.lower():
            return False
        if a == b:
            return False
        index = index + 1

    return True
