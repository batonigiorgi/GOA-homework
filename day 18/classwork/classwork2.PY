first_num = int(input("Enter First Number: "))
last_num = int(input("Enter Last Number: "))

numbers = []

for i in range(first_num, last_num + 1):
    numbers.append(i)


min_value = min(numbers)
max_value = max(numbers)
sum_value = sum(numbers)

print(min_value)
print(max_value)
print(sum_value)
