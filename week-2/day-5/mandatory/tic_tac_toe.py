board = []

def make_row():
    for i in range(3):
        row = []
        for j in range(3):
            row.append('-')
    board.append(row)
    return row

row1 = make_row()
row2 = make_row()
row3 = make_row()

def show_board():
    print(row1)
    print(row2)
    print(row3)



def check_win():
    if ((row1[0] == row2[0] == row3[0] !="-") or (row1[1] == row2[1] == row3[1] !="-") or
        (row1[2] == row2[2] == row3[2] !="-") or (row1[0] == row1[1] == row1[2] !="-") or (row2[0] == row2[1] == row2[2] !="-") or 
        (row3[0] == row3[1] == row3[2] !="-") or (row1[0] == row2[1] == row3[2] !="-") or (row1[2] == row2[1] == row3[0] !="-")):
        return True
    
    elif '-' not in  row1 and '-' not in  row2 and '-' not in  row3:
        return 'draw'
    
    else: 
        return False
    



def player_input():

    player_counter = 0
    player = ''
    for game_round in range(100): # --------------> this just needs to be high it's not really relevant

        if player_counter % 2 == 0:
            player = 'X'
        else:
            player = 'O'

        user_in_column = input(f'player {player}, enter column (1-3): ')
        user_in_row = input(f'player {player}, enter row (1-3): ')

        # if user_in_column not in ['1', '2', '3'] and user_in_row not in ['1', '2', '3']:
        #     print('invalid piece')
        #     player_counter += 1

        if board[int(user_in_column)-1][int(user_in_row)-1] == '-':
            board[int(user_in_column)-1][int(user_in_row)-1] = player

        else:
            print('piece already there')

        show_board()
        check_win()
        if check_win() == True:
            print(f'player {player} wins!')
            break
        elif check_win() == 'draw':
            print(f'it\'s a draw!')
            break
        player_counter += 1

player_input()
