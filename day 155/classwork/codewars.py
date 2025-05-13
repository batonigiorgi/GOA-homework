
def two_oldest_ages(ages):
    sorted_ages = sorted(ages)

    oldest = sorted_ages[-1]
    second_oldest = sorted_ages[-2]

    return [second_oldest, oldest]



def halving_sum(n):
    total = 0
    while n > 0:
        total += n
        n //= 2  
    return total