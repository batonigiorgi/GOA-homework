def calculate(a, b):
    print("აირჩიეთ ოპერაცია:")
    print("1. შეკრება")
    print("2. გამოკლება")
    print("3. გამრავლება")
    print("4. გაყოფა")
    
   
    choice = input("შეიყვანეთ ოპერაციის ნომერი (1/2/3/4): ")
    
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
