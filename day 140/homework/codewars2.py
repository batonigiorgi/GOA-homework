def create_phone_number(n):
    part1 = "".join(str(i) for i in n[0:3])
    part2 = "".join(str(i) for i in n[3:6])
    part3 = "".join(str(i) for i in n[6:10])
    return f"({part1}) {part2}-{part3}"
