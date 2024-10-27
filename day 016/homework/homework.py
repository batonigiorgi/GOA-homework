# 1
family_members = ["Mariam", "Giorgi", "Lasha", "Tamuna"]
print(family_members[0]) 
print(family_members[1])  
print(family_members[2])  
print(family_members[3]) 


# 2
numbers = list(range(1, 11))
print(numbers[0])  
print(numbers[-1])  



# 3 
numbers = list(range(10, 21))
for i in range(0, len(numbers), 2):  
    numbers[i] = 1

print(numbers)



# 4
name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = input("Enter your age: ")
location = input("Enter your location: ")
email = input("Enter your email: ")

user_info = [name, surname, age, location, email]
print(user_info)


# 5
surname = "Giorgadze"

for i in range(len(surname)):
    print(surname[i])
