def unique_in_order(sequence):
    res = []
    prev = None

    for i in sequence:
        if i != prev:
            res.append(i)
            prev = i
    return res