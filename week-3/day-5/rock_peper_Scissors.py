# Mini-Project #1: Rock, Paper, Scissors
import random

def computer_pick():
    computer_pick_out = ''
    random_num = random.randint(1, 3)
    if random_num == 1:
        computer_pick_out += 'rock'
    elif random_num == 2:
        computer_pick_out += 'paper'
    else:
        computer_pick_out += 'scissors'
    return computer_pick_out

user_in = input('pick a move! rock, paper or scissors: ')


def game():
    computer_in = computer_pick()
    print(user_in)
    print(computer_in)


    if user_in == 'rock':
        if computer_in == 'scissors':
            print(f'user wins! user picked {user_in} and computer picked {computer_in}')
        elif computer_in == 'paper':
            print(f'computer wins! user picked {user_in} and computer picked {computer_in}')


    elif user_in == 'paper':
        if computer_in == 'rock':
            print(f'user wins! user picked {user_in} and computer picked {computer_in}')
        elif computer_in == 'scissors':
            print(f'computer wins! user picked {user_in} and computer picked {computer_in}')


    elif user_in == 'scissors':
        if computer_in == 'rock':
            print(f'computer wins! user picked {user_in} and computer picked {computer_in}')
        elif computer_in == 'paper':
            print(f'user wins! user picked {user_in} and computer picked {computer_in}')


    elif computer_in == user_in:
        print(f'draw! both picked {user_in}')

    else:
        print('invalid input')

game()