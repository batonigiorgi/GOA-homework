def multi_table(number):
    result = ""
    for i in range(1, 11):
        line = f"{i} * {number} = {i * number}"
        if i != 10:
            result += line + "\n"
        else:
            result += line
    return result