#შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)
def hello():
    print("გამარჯობა")
hello()

#შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")
 #(ვოიდ ფუნქცია)

def hello_name(name):
    print(f"გამარჯობა + {name}")
hello_name("გიორგი")

#შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  
def greater(num):
    return num + 1
print(greater(int(input("Enter number: "))))
def nums(number):
    if number > 0:
        number *= -1
    return number + 1
print(nums(int(input("Enter number: "))))

