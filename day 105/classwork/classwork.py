def domain_name(url):
    domain = ""
    start = 0

    if url.startswith("http://"):
        start = 7 
    elif url.startswith("https://"):
        start = 8  

    if url[start:start + 4] == "www.":
        start += 4  

    for i in range(start, len(url)):
        if url[i] == '.' or url[i] == '/':
            break
        domain += url[i]

    return domain