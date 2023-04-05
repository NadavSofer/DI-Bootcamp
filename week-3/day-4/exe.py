text = 'this is the test for the thingy'

text_list = text.split(' ')


filename= 'test.txt'

# w - write ---------------------------
# with open(filename, 'w') as file:
#     # file.write(text)
    
#     # file.writelines(text_list)
#     for word in text_list:
#         file.write(word + '\n')

# r - read ---------------------------

# text_lines = []
# text_lines2 = []
# with open(filename, 'r') as file:
#     # thing = (file.read())
#     text_lines = file.readlines()
#     file.seek(0)
#     text_lines2 = file.readline()
#     file.seek(0)
#     print(file.tell())

# print(text_lines)
# print(text_lines2)

# a - append ---------------------------

# new_line = 'hello!'

# with open(filename, 'a') as file:
#     file.write(new_line)


# update ---------------------

new_text = []
with open(filename, 'r') as file:
    new_text = file.readlines()

print(new_text)