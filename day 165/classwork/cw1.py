def whose_move(last_player, win):
    if win:
        return last_player
    else:
        return "white" if last_player == "black" else "black"


def pythagorean_triple(integers):
    integers.sort() 
    a, b, c = integers  
    return a**2 + b**2 == c**2  



def is_valid(formula):
    if 1 in formula and 2 in formula:
        return False
    
    if 3 in formula and 4 in formula:
        return False
    
    if (5 in formula) != (6 in formula): 
        return False
    
    if not (7 in formula or 8 in formula):
        return False

    return True


