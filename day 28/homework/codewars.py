#1
def digitize(n):
    return [int(x) for x in str(n)][::-1]

#2
def are_you_playing_banjo(name):
    return f"{name} plays banjo" if name[0].lower() == 'r' else f"{name} does not play banjo"

#3
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif (p1 == "rock" and p2 == "scissors") or (p1 == "scissors" and p2 == "paper") or (p1 == "paper" and p2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"

#4
def quarter_of(month):
    return (month + 2) // 3

#5
def count_sheep(n):
    return ''.join(f"{i} sheep..." for i in range(1, n + 1))

#6
def say_hello(name):
    return f"Hello, {name}!"

#7
def double_char(s):
    return ''.join([c * 2 for c in s])

#8
def remove_exclamation_marks(s):
    return s.replace('!', '')
