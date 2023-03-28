# Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# out = dict(zip(keys, values))

# print(out)



# xercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# family = {"rick": 43, 'beth': 13, 'morty': 2, 'summer': 8}
# total_price = 0 

# for name, age in family.items():
#     price = 0
#     if age < 3:
#         print(f'{name} your ticket cost is {price}')
#         continue
#     elif 3 <= age <= 12:
#         total_price += 10
#         price += 10
#     else:
#         total_price+= 15
#         price += 15
#     print(f'{name} your ticket cost is {price}')

# print(total_price)

# Exercise 3: Zara
# Instructions
# Here is some information about a brand
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000


# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

# brand = {'name': 'Zara',
#         'creation_date': 1975,
#         'creator_name': 'Amancio Ortega Gaona',
#         'type_of_clothes': ['men', 'women', 'children', 'home'],
#         'international_competitors': ['Gap', 'H&M', 'Benetton'], 
#         'number_stores': 7000, 
#         'major_color': {
#             'France': 'blue', 
#             'Spain': 'red', 
#             'US': ['pink','green']
#         }
#             }

# brand['number_stores'] = 2
# brand['country_creation'] = 'Spain'
# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')

# brand['creation_date'] = ''



# print(brand['international_competitors'][-1])
# print(brand['major_color']['US'])
# print(len(brand))
# print(brand.keys())

# more_on_zara = {
#     'creation_date': 1975,
#     'number_stores': 10000
# }
# brand.update(more_on_zara)

# print(brand['number_stores'])


# # daily ----------------------------->
# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.


# user_in = input('type a word: ')

# dict_char = {}
# for i, char in enumerate(user_in):
#     if not(char in dict_char):
#         dict_char[char] = [i]
#     else:
#         dict_char[char].append(i)


# print(dict_char)


# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.


# items_purchase = {
#     "Water": "$1",
#     "Bread": "$3",
#     "TV": "$1,000",
#     "Fertilizer": "$20"
# }

# wallet = "$300"



# can_afford = []
# for i in items_purchase:
#     if int(wallet[1:].replace(',', '')) >= int(items_purchase[i][1:].replace(',', '')):
#         can_afford.append(i)
# if not(len(can_afford)):
#     print("Nothing")
# else:
#     print(can_afford)