# #Exercise 1

#   Create a set called my_fav_numbers with all your favorites numbers.
#   Add two new numbers to the set.
#   Remove the last number.
#   Create a set called friend_fav_numbers with your friend’s favorites numbers.
#   Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
# my_fav_numbers = set()
# my_fav_numbers.add(5)
# my_fav_numbers.add(3)
# my_fav_numbers.add(2)
# my_fav_numbers.add(7)

# my_fav_numbers_list = (list(my_fav_numbers))
# my_fav_numbers_list.pop()
# my_fav_numbers = set(my_fav_numbers_list)
# print(my_fav_numbers)

# friend_fav_numbers = {4, 6}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)



# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?


# a_tuple = (1,2,3,4,5)
# a_tuple_list = list(a_tuple)
# a_tuple_list.append(6)
# a_tuple_list.append(7)
# a_tuple = tuple(a_tuple_list)
# print(a_tuple)


#----------------------------->
# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove('Banana')
# basket.pop(-1)
# basket.append('Kiwi')
# basket.append('Apples')
# print(basket.count('Apples'))
# basket.clear()
# print(basket)


# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

# exe4_count = 1
# while exe4_count < 5:
#     exe4_count += 0.5
#     print(exe4_count)



# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# exe5_count = 1
# for i in range(0, 20):
#     # print(exe5_count)
#     if exe5_count%2 == 0:
#         print(exe5_count)
#     exe5_count += 1




# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# while(1):
#     if input('enter name: ') == 'nadav':
#         break


# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


# favorite_fruits = input("type your favorite fruits (with space between them) : ").split()
# print(favorite_fruits)
# if input("choose one fruit: ") in favorite_fruits:
#     print('You chose one of your favorite fruits, Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy!')


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# topping_list = []
# price = 10
# while (1):
#     user_in = input('add toppings, type quit when you\'re done: ')
#     if user_in == 'quit':
#         print(f'your total is: {10 + (2.5 * len(topping_list))}')
#         break
#     else:
#         topping_list.append(user_in)
#         print(f'your toppings are: {topping_list}')



# daily ----------------------------------

# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

# out = 0

# user_in = input('type two numbers: ').split()

# for i in range(0, len(user_in)):
#     user_in[i] = int(user_in[i])

# repeat_num = user_in[-1]
# multi_num = user_in[0]
# for num in range(0, repeat_num):
#     out += multi_num
#     print(out)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

# daily2_in = input('enter a word: ')

# out = []

# for i in daily2_in:
#     out.append(i)
#     out.append(i)
# double_word =''.join(out)
# print(double_word)