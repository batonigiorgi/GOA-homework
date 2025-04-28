def till_one_digit(num):
    times = 0  
    while num >= 10: 
        product = 1  
        for digit in str(num):  
            product *= int(digit) 
        num = product  
        times += 1  
    return times  

print(till_one_digit(39))