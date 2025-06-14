
def position(letter):
    number = ord(letter) - ord('a') + 1
    return "Position of alphabet: " + str(number)





def duty_free(price, discount, holiday_cost):
    savings_per_bottle = price * discount / 100
    bottles_needed = holiday_cost / savings_per_bottle
    return int(bottles_needed)




def correct_tail(body, tail):
    return body[-1] == tail