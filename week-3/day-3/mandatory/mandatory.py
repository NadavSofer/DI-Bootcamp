# Exercise 1 : Built-In Functions ----------------------------------------
# def exe1():
#     """
#     abs returns the absolute number of the parameter.
#     int makes strings into integers.
#     input asks a user for an input
#     """
    
#     num1 = -25
#     num1_abs = abs(num1)

#     string_num = '55'
#     numed_string = int(string_num)
    
#     user_in = input("I don't know what to write, send help: ")

#     print(num1_abs)
#     print(numed_string)
#     print(user_in)
#     print(exe1.__doc__)

# exe1()

# Exercise 2: Currencies--------------------------------------------------

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
    
#     def __str__(self) -> str:
#         out = f'{self.amount} {self.currency}s'
#         return out

#     def __int__(self) -> None:
#         return self.amount
    
#     def __repr__(self) -> str:
#         return f'{self.amount} {self.currency}s'

#     def __gt__(self, other_num):
#         return self.amount > other_num.amount
    
#     def __lt__(self, other_num):
#         return self.amount < other_num.amount

#     def __add__(self, other_num):
#         if isinstance(other_num, Currency):
#             if self.currency == other_num.currency:
#                 return self.amount + other_num.amount
#             else:
#                 return 'not the same currency'
#         else:
#             return self.amount + other_num
    
#     def __iadd__(self, other_num):
#         if isinstance(other_num, Currency):
#             self.amount += other_num.amount
#         else:
#             self.amount += other_num


# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# thing = c1 + c3

# print(thing)
# print(repr(c1))


# xp + Exercise 1: Import------------------------------------------
# from func import add_2
# add_2(5, 3)

# xp+ Exercise 2: Random Module ----------------------------------
# import random
# def exe2():
#     try:
#         user_in = input('write a number between 1-100: ')
#         user_in_int = int(user_in)
#         random_num = random.randint(0, 100)
#         if user_in_int == random_num:
#             print('win!!')
#         else:
#             print(f'nope! the random number was {random_num} and yours was {user_in_int}. \ngood luck next time')
#     except ValueError:
#         print("that's not a number")

# exe2()

# xp+ Exercise 4 : Current Date-------------------------------------

# from datetime import datetime
# def show_time():
#     current = datetime.now()
#     print(current)
# show_time()

# Daily Challenge - Circle-------------------------------------------
from math import pi

class Circle:
    def __init__(self, radius=None, diameter=None) -> None:
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius =  diameter / 2

    def area(self):
        area_out = pi * self.radius ** 2
        return area_out
    
    def __add__(self, other_circle):
        add_out = self.area() + other_circle.area()
        return add_out

    def __gt__(self, other_circle):
        return self.area() > other_circle.area()
    
    def __lt__(self, other_circle):
        return self.area() < other_circle.area()
    
    def __eq__(self, other_circle):
        return self.area() == other_circle.area()
    
    def sort_circle(self, *other):
        list_out = [self.area()]
        for item in other:
            list_out.append(item.area())
        sorted_list_out = sorted(list_out)
        return sorted_list_out


circle1 = Circle(diameter = 2.0)
circle2 = Circle(diameter = 3.0)
circle3 = Circle(diameter = 5.0)


print(circle1.area())
print(circle1 + circle2)


print(circle1.sort_circle(circle2, circle3))
# Daily Challenge: Translator -----------------------------------------


# from translate import Translator



# string = 'hello'