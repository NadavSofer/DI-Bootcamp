# Exercise 1 – Random Sentence Generator -----------------------------
# import random

# xp_list = 'xp.txt'
# test_file = 'test.txt'

# def get_words_from_file(file_name):
#     new_text = []
#     with open(file_name, 'r') as file:
#         new_text = file.readlines()
#     return new_text

# xp_list = get_words_from_file(xp_list)
# test_list = get_words_from_file(test_file)

# def get_random_sentence(length):
#     random_sentence__list = []
#     for i in range(0, length):
#         random_num = random.randint(0, len(xp_list))
#         random_sentence__list.append(xp_list[random_num].strip('\n'))
#     random_sentence_str = ' '.join(random_sentence__list)
#     random_sentence_out = f'your random sentence is:  {random_sentence_str.lower()}.'
#     return random_sentence_out

# def main():
#     try:
#         user_in = input('type a number up to 267751: ')
#         user_in_int = int(user_in)
#         return user_in_int
#     except: 
#         raise ValueError(f'invalid input: {user_in} is not a number')

# list1 = get_random_sentence(main())
# print(list1)

# Exercise 2: Working With JSON -----------------------------------------
# import json



# json_file = "xp2.json"

# with open(json_file, 'r') as xp2_json:
#     xp2 = json.load(xp2_json)

# salary = xp2['company']['employee']['payable']['salary']

# birth_date = xp2['company']['employee']['birth date'] = 1998

# print(xp2)

# with open(json_file, 'w') as xp2_json:
#     json.dump(xp2, xp2_json)
