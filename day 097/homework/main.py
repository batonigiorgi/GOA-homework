def six(string):
    sixsh = {}
    for i in string:
        if i in sixs:
            sixs[i] += 1
        else:
            sixs[i] = 1
    return sixs

string = "giorgi"
res = six(string)
print(res)