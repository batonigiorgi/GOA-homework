def is_flush(cards):
    first = cards[0][-1]
    for i in cards:
        if i[-1] != first:
            return False

    return True
def multi_table(number):
    table=""
    for i in range(1,11):
        if i!=10:
            table+=str(i) + " * " +  str(number) + " = " + str(inumber) + "\n"
        else:
            table+=str(i) + " " +  str(number) + " = " + str(i*number)
    return table