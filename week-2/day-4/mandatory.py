import random
import re

# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def display_message():
#     print('hello, I am thing')

# display_message()

# Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# def favorite_book(title):
#     print(f'"One of my favorite books is {title}')

# favorite_book('Mistborn')

# Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city, country = 'earth'):
#     print(f"{city} is in {country}")

# describe_city('thing')


# Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

# def make_shirt(size = 'L', text = 'I love Python'):
#     print(f"The size of the shirt is {size} and the text is: {text}")

# make_shirt()
# make_shirt('M')
# make_shirt('XL', 'thing here')
# make_shirt(text = 'thing here')

# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(list:list):
#     for word in list:
#         print(word)

# show_magicians(magician_names)

# def make_great(list):
#     for i, word in enumerate(list):
#         list[i] += ' the great'
#     return  list

# make_great(magician_names)
# show_magicians(magician_names)



# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

# user_in = input('type season: ')

# def get_random_temp(season):
#     if season == 'spring':
#         num = random.randint(5, 30)
#     if season == 'summer':
#         num = random.randint(10, 40)
#     if season == 'autumn':
#         num = random.randint(-5, 20)
#     if season == 'winter':
#         num = random.randint(-10, 10)
#     return num

# def main():
#     random_num = get_random_temp(user_in)
#     msg = f'The temperature right now is {random_num} degrees Celsius. \n'
#     if random_num < 0:
#         msg+= 'Brrr\, that\’s freezing! Wear some extra layers today'
#     elif 0 < random_num <=16:
#         msg += 'Quite chilly! Don\’t forget your coat'
#     elif 16 < random_num <=23:
#         msg += 'Getting pretty warm'
#     elif 23 < random_num <=32:
#         msg += 'Don\'t forget to drink water'
#     elif 32 < random_num <=40:
#         msg += 'Going out is choosing death'
#     return msg

# print(main())

#Daily-------------------------------------

# base_str = "7i3Tsih%xi #sM $a #t%^r!"
# base_list = list(base_str)


# res = []
# def matrix(list):
#     count = 0
#     for i in range(0 , len(list) // 3):
#         res.append([])
#         for char in range(0 , 3):
#             res[i].append(list[count])
#             count += 1
#     return res



# def decrypt(list):
#     out = []
#     for item in list:
#         for word in item:
#             if word.isalpha():
#                 out += word
#     return out


# end_res = ''.join(decrypt(matrix(base_list)))
# print(end_res)