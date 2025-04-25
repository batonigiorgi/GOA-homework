def find_difference(a, b):
    return abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]))


def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague


def name_shuffler(str_):
    return ' '.join(str_.split()[::-1])


def position(letter):
    return f"Position of alphabet: {ord(letter) - 96}"


def get_char(c):
    return chr(c)
