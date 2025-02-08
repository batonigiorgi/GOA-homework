def paperwork(n, m):
    return max(0, n * m)



def string_to_number(s):
    return int(s)



def check(seq, elem):
    return elem in seq



def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    return sum(range(begin_number, end_number + 1, step))



def find_smallest_int(arr):
    return min(arr)




def get_count(string):
    return sum(1 for char in string if char in 'aeiouAEIOU')
