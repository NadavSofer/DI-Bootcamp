# user_in = input('type word: ')

# def func(word) -> None:
#     print(f'your word is: {word}')

# func(user_in)

# def add_two(num1, num2) -> int:
#     return num1 + num2

# print(add_two(1, 2))

# def concat_str(str1, str2) -> str:
#     concat = str1 + ' ' + str2
#     return concat

# print(concat_str('hello', 'there'))

# def separate_str(text) -> tuple[str, str]: #------------------. multiple items return as a tuple
#     str1, str2 = text.split(' ')
#     return str1, str2

# str1, str2 = separate_str(concat_str('hello', 'there'))
# print(str1)
# print(str2)

# def calculation(num1, num2) -> tuple[int, int]:
#     add = num1 + num2
#     subtract = num1 - num2
#     return add, subtract

# addition, subtraction = calculation(5, 1)

# print(addition)
# print(subtraction)

# def light_lvl(hour: int)-> str | None:
#     if 10 < hour < 18:
#         return 'sunny'
#     elif 24 > hour > 18 or 0 < hour < 10:
#         return 'dark'
#     else: return None

# print(light_lvl(25))

# def gen_info():
#     return 'nadav', 'S'

# def concat_str(str1, str2):
#     concat = str1 + ' ' + str2
#     return concat

# def sum_info():
#     str1, str2 = gen_info()
#     concated =  concat_str(str1, str2) 
#     return concated

# print(sum_info())


#-------------------------------------------->

# items_purchase = {
#     "Water": "$1",
#     "Bread": "$3",
#     "TV": "$1,000",
#     "Fertilizer": "$20"
# }

# wallet = "$300"



# can_afford = []


# def cal_purchases(items_prices: dict[str, str], wallet: str) -> list | str:
#     wallet_up = wallet.strip('$')
#     wallet_up = wallet_up.replace(',', '')
#     wallet = int(wallet_up) 

#     for item, price in items_purchase.items():
#         price_up = price.strip('$')
#         price_up = price_up.replace(',', '')
#         items_prices[item] = int(price_up) 

#         if items_purchase[item] <= wallet:
#             can_afford.append(item)
#             wallet -= items_prices[item]

#     if len(can_afford) == 0:
#         print('nothing')
#     else:
#         can_afford.sort()
#         return can_afford

# print(cal_purchases(items_purchase, wallet))


# out = ''
# def full_info(*args) ->str: #------------------------> undetermined amounts of args
#     for data in info: 
#         out += data + '\n'

# out = ''
# def full_info(**kwargs) ->str: #------------------------> undetermined amounts of dicts
    # out = ''
#     for key, value in kwargs.items():
#         out += f'{key}: {value} \n'
    # return out

# print(full_info(first_name = 'nadav'))

# def exe2(num:int, limit:int):
#     base = '1'
#     out = 0
#     for i in range(1, limit + 1):
#         multi = base * i 
#         res = num * int(multi)
#         out += res
#     return out

# print (exe2(3, 4))

#------------------------------------------------->

add_two = lambda num1, num2: num1 + num2

print(add_two(2, 2))

list1 = [1,2,3,4,5]

num_power2 = list(map(lambda n: n**2, list1))

multi_two = lambda num: num * 2

multied = list(map(multi_two, list1))

print(multied)

words = ['thing1', 'thing2', 'thing3']

cpital = list(map(lambda word: word.capitalize(), words))

print(cpital)

#-------------------------------------->
from functools import reduce

num_sum = reduce(lambda n1, n2: n1 + n2, list1)


list2 = [ 5, 4, 3, 2 ,1]


def cal (num1, num2):
    res = num1 ** 2 + num2 ** 3
    return res

calculated = reduce(cal, list2)
print(calculated)

odd = list(filter(lambda n: n % 2 != 0, list))

print(odd)