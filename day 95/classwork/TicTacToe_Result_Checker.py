def check_game_result(board):
    size = len(board)

    for row in board:
        if row[0] != "" and row[0] == row[1] and row[1] == row[2]:
            return row[0] + " მოიგო"

    for line in range(size):
        if board[0][line] != "" and board[0][line] == board[1][line] and board[1][line] == board[2][line]:
            return board[0][line] + " მოიგო"

    if board[0][0] != "" and board[0][0] == board[1][1] and board[1][1] == board[2][2]:
        return board[0][0] + " მოიგო"

    if board[0][2] != "" and board[0][2] == board[1][1] and board[1][1] == board[2][0]:
        return board[0][2] + " მოიგო"


    return "ფრე"

board = [
    ["O", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "X"]
]
print(check_game_result(board))  
