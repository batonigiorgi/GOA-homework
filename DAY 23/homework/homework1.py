def calculate(a, b):
    print("Choose Operation:")
    print("1. Plus")
    print("2. Minus")
    print("3. Multiply")
    print("4. Divide")
    
   
    choice = input("Choose operation number (1/2/3/4): ")
    
    if choice == '1':
        result = a + b
    elif choice == '2':
        result = a - b
    elif choice == '3':
        result = a * b
    elif choice == '4':
        result = a / b
    else:
        print("invalid choice!!")
      
    
    
    
    return result


print(calculate(10, 5))
