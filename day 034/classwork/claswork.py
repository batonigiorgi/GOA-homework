def dna_to_rna(dna):
    return dna.replace('T', 'U')

def find_short(s):
    return min(len(word) for word in s.split())