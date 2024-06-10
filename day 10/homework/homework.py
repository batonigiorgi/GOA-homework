#1
for i in range(21):
    print(i)

#2
num = int(input("Enter Your Number: "))

if num % 2 ==0:
    print("YOUR NUMBER IS EVEN")

#3
for i in range(21):
    if i %2 ==0:
        print(i)


#4
sum=0
for i in range(50, 101):
    sum+=i
print(sum)

#5
for i in range(1, 51):
    if i % 5 == 0:
        print(i)

#6
num1= int(input("Enter your number: "))
for i in range(1):
    if 100 < num1:
        print("HIGHEST NUMBER")


num2 = int(input("Enter number: "))
for i in range(1):
    if 100 > num2:
        print("Lowest number ")

#7

num1 = 1
for i in range(5, 11):
    num1 *= i
print("Multiples of 5 to 10 inclusive", num1)