def calculator(txt):
    parts = txt.split()
    left = parts[0]
    operator = parts[1]
    right = parts[2]

    if operator == "+":
        result = len(left) + len(right)

    elif operator == "-":
        result = len(left) - len(right)

    elif operator == "":
        result = len(left) * len(right)

    elif operator == "//":
        result = len(left) // len(right)

    return "." * result