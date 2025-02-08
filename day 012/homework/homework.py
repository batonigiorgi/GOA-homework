#------1-------


#1

num = 0

while num < 10:
   print("Giorgi")
   num= num + 1

#2
num = 0

while num > 10:
    print("Giorgi")
    num = num + 1
    
#3

num = 1

while num >= 10:
    print("Gio")
    num = num + 1

#4

num = 1

while num <= 10:
    print("G")
    num = num + 1

#5
#num = 0
#while num == 0:
    #print("GIORGI")
    #infinite loop


#--------2---------

#1

for i in range(6):
    print(i)

#2

for i in range(5, 10):
    print(i)

#3

for i in range(1, 20, 2):
    print(i)

#4

for x in "banana":
  print(x)

#5

for i in "banana", "apple":
    print(i)


#-------6-------

#1
x = 5
y = 4
if x > y:
    print("True")

#2

x = 5
y = 4
if x < y:
    print("True")
else:
    print("False")

#3

x = 2
y = 3
print("x") if x > y else print("y")

#4

a = 1
b = 3
if b > a:
  print("Giorgi")
elif a == b:
  print("giorgi")
else:
  print("gIO")

#5

a = 100
b = 200
if b > a:
  print("GIO")
else:
  print("GIORGI")
