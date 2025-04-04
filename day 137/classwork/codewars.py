def battle(x, y):
    letter_values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    def score(word):
        total = 0
        for char in word.upper(): 
            if char in letter_values:  
                total += letter_values.index(char) + 1  
        return total

    score_x = score(x)
    score_y = score(y)

    if score_x > score_y:
        return x
    elif score_y > score_x:
        return y
    else:
        return "Tie!"