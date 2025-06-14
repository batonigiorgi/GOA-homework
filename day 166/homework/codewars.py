

def multiply(n):
    return n * 5 ** len(str(abs(n)))



def stringy(size):
    return ''.join('1' if i % 2 == 0 else '0' for i in range(size))




def remove_url_anchor(url):
    return url.split('#')[0]
