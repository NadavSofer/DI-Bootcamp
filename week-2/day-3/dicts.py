# dict1 = {'key': 'value',
#         'key2': 'value2',
#         'key3': 'value3'}

# for key in dict1:
#     print(key)

# for value in dict1.values():
#     print(value)

# for value in dict1.items():
#     print(value)
# print(dict1['key'])

# dict1 ['key4'] = 'value4' #--------------------> add key and value
# dict1.update({'key5': 'value5', 'key6': 'value6'}) #------------> adds multiple keys and values

# print(dict1)

# dict1['key7'] #--------------> accessing a key that doesn't exist = fatal error
# dict1.get('key7', 'not found') #------------> no error and will set a default to a key that doesn't exist

# sample_dict = { 
#     "class":{ 
#         "student":{ 
#             "name":"Mike",
#             "marks":{ 
#                 "physics":70,
#                 "history":80
#             }
#         }
#     }
# }

# print(sample_dict['class']['student']['marks']['history'])

# sample_dict2 = {
#     "name": "Kelly",
#     "age":25,
#     "salary": 8000,
#     "city": "New york"
# }

# keys_to_delete = ['name', 'salary']
# deleted_keys = {}
# for key in keys_to_delete:
#     removed = sample_dict2.pop(key)
#     deleted_keys[key] = removed


# print(sample_dict2)
# print(deleted_keys)


# thing = 'abcd'
# for i, char in enumerate(thing):
#     print(i, char)




# comprehensions -----------------------------

# numbers = []

# for num in range(100):
#     if num % 2 ==0:
#         numbers.append(num)

# numbers2 = [num for num in range(100) if num % 2 ==0]

# print(numbers2)

# alpha = 'abcdefg'
# alpha_dict = dict(enumerate(alpha))

# even_letters = {key: value for key, value in alpha_dict.items() if key % 2 == 1}
# print(even_letters)

# word = 'thing'
# word_list = [char for char in word]


# nums = [num for num in range(0, 11)]
# print(nums)