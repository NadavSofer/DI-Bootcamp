# Exercise 1: Cats ----------------------------------------------------

# class Cat:
#     def __init__(self, name, age) -> None:
#         self.name = name
#         self.age = age

#     def show_age(self):
#         print(f'{self.name} is {self.age} years old')


# cats = [Cat('Anpi', 25), Cat('Vephi', 12), Cat('Haive', 5)]

# max = Cat('test', 0)
# for cat in cats:
#     if cat.age > max.age:
#         max = cat

# print(f'The oldest cat is {max.name}, and is {max.age} years old')

# Exercise 2 : Dogs -----------------------------------------------------

# class Dog:
#     def __init__(self, name, height) -> None:
#         self.name = name
#         self.height = height

#         def bark(self):
#             print(f'{self.name} goes woof!')

#         def jump(self):
#             print(f'{self.name} jumps {self.height * 2} CM high!')


# dog1 = Dog('Gili', 30)
# print(dog1.name)
# print(dog1.height)

# dog2 = Dog('Dog', 70)
# print(dog2.name)
# print(dog2.height)

# if dog1.height > dog2.height:
#     print(f'{dog1.name} is taller')
# else:
#     print(f'{dog2.name} is taller')


# Exercise 3 : Who’s The Song Producer? ------------------------------------

# class Song:
#     def __init__(self, lyrics) -> None:
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for x in self.lyrics:
#             print(x)


# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo ------------------------------------------

# class Zoo:


#     def __init__(self, zoo_name) -> None:
#         self.zoo_name = zoo_name
#         self.animals = []
#         self.animals_dict = {}


#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#         else:
#             print('animal is already in the list')


#     def get_animals(self):
#         print(self.animals)


#     def sell_animal(self, sold_animal):
#         if sold_animal in self.animals:
#             self.animals.remove(sold_animal)
#         else:
#             print('animal is not in the list')

#     def sort_animals(self):
#         sorted(self.animals)
#         for animal in self.animals:
#             char = animal[0]
#             if char in self.animals_dict:
#                 self.animals_dict[char].append(animal)
#             else:
#                 self.animals_dict[char] = [animal]


#     def get_groups(self):
#         print(self.animals_dict)

# zoo = Zoo('thing')

# zoo.add_animal('tiger')
# zoo.add_animal('toger')
# zoo.add_animal('Bear')
# zoo.add_animal('Ape')
# zoo.add_animal('Baboon')
# zoo.add_animal('Cougar')
# zoo.add_animal('Eel')
# zoo.add_animal('Emu')
# zoo.add_animal('snake')

# zoo.sell_animal('toger')

# zoo.sort_animals()

# zoo.get_animals()


# daily ================================================================


class Farm:
    def __init__(self, name) -> None:
        self.name = name
        self.animals_dict = {}

    def add_animal(self, animal, number):

        try:
            self.animals_dict[animal] += number
        except:
            self.animals_dict[animal] = number

        # if animal in self.animals_dict:
        #     self.animals_dict[animal] = number
        # else:
        #     self.animals_dict[animal] += number

    def get_info(self):
        print(self.name)
        for animal, amount in self.animals_dict.items():
            print(f'{animal}: {amount}')
        print('E-I-E-I-0!')


    def get_animal_types(self):
        return ', '.join(self.animals_dict.keys())

    def get_short_info(self):
        return f'McDonald’s farm has {self.get_animal_types()}'


macdonald = Farm("McDonald")

macdonald.add_animal('sheep', 5)
macdonald.add_animal('cow', 14)
macdonald.add_animal('sheep', 2)
macdonald.add_animal('wolf', 5)

print(macdonald.get_short_info())