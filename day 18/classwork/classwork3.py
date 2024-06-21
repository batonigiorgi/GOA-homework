count = int(input("Please enter your number: "))

numbers=[]
for i in range(count):
   num=int(input("Please enter your number" + str(i + 1)))
   numbers.append(num)

print(sum(numbers))