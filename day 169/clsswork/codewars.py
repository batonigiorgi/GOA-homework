def divisible_by(numbers, divisor):
    result = []
    
    for num in numbers:
        if num % divisor == 0:
            result.append(num)
            
    return result




def move_zeros(lst):
    result = []
    zeros = 0
    for item in lst:
        if item == 0:
            zeros += 1
        else:
            result.append(item)

    result += [0] * zeros
    return result



def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwsyz"
    st = st.lower()
    for letter in alphabet:
        if letter not in st:
            return False 
    return True