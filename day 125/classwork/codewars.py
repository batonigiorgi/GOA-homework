def similarity(a, b):
    set_b = set(b)
    diff = 0
    for x in a:
        if x in set_b:
            diff += 1

    all_elements = set() 
    for x in a:
        all_elements.add(x)
    for x in b:
        all_elements.add(x)

    sim = len(all_elements)

    return diff / sim