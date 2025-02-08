def has_same_digits(num1, num2):
    final = num1 * num2
    
    num1_digits = str(num1)
    num2_digits = str(num2)
    final_digits = sorted(str(final))
  
    return sorted(num1_digits + num2_digits) == final_digits


print(has_same_digits(10, 11)) 
print(has_same_digits(6, 21))
