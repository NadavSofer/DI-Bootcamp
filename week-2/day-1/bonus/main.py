#xp gold exercise 1
# print('Hello world\n Hello world\n Hello world\n Hello world\nI love python\nI love python\nI love python')

#xp gold exercise 2
# month = input('type a month (1-12)')
# month_int = int(month)
# if month_int >=3 and month_int <= 5:
#     print('spring')
# elif month_int >=6 and month_int <= 8:
#     print('summer')
# elif month_int >=9 and month_int <= 11:
#     print('autumn')
# elif month_int == 1 or month_int == 2 or month_int == 12:
#     print('winter')
# else:
#     print('not a month')

#xp ninja exercise 1-2
#Read about alias, and try to open a python console with the command:
#Set-Alias -Name py -value python

#xp ninja exercise 3
# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9 = true
#     >>> 3 == 3 == 3 = true
#     >>> bool(0) = false
#     >>> bool(5 == "5") = false
#     >>> bool(4 == 4) == bool("4" == "4") = true
#     >>> bool(bool(None)) = false
#     x = (1 == True) = true
#     y = (1 == False) = false
#     a = True + 4 = 5
#     b = False + 10 = 10

#     print("x is", x) = true
#     print("y is", y) = false
#     print("a:", a) = a:5
#     print("b:", b) = b:10

#xp ninja exercise 4
#Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).
# my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#             laboris nisi ut aliquip ex ea commodo consequat. 
#             Duis aute irure dolor in reprehenderit in voluptate velit 
#             esse cillum dolore eu fugiat nulla pariatur. 
#             Excepteur sint occaecat cupidatat non proident, 
#             sunt in culpa qui officia deserunt mollit anim id est laborum."""
# my_text_len = len(my_text)
# print(my_text_len)

#xp ninja exercise 5
score = 0
while(1):
    ninja5 = input('Longest Word Without the A Character: ')
    if 'a' in ninja5 or 'A' in ninja5:
        print('NO A!')
    else:
        print(f'good job. your score is {len(ninja5)}')
        if len(ninja5) > score:
            score = len(ninja5)
            print('new record')