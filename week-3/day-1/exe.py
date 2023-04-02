class Player:

    def __init__(self, name, strength, speed, level=0) -> None:
        self.name = name
        self.strength = strength
        self.speed = speed
        self.level = level


    def jump(self):
        jump_height = (self.strength + self.speed)
        print(f'{self.name} jumps! ')

    
    def level_up(self):
        self.level += 1
        print(f'leveled up to {self.level}')

conan = Player('Conan', 20, 30)
xena = Player('Xena', 18, 40)


conan.location = 'somewhere'

print(conan.name)
conan.jump()

#--------------------------------------------------->

# class Human:

#     population = 0
#     person = {}

#     def __init__(self, first_name, last_name = 'smith') -> None:
#         self.first_name = first_name
#         self.last_name = last_name

#         self.full_name = self.first_name + self.last_name

#         Human.population += 1

#         Human.person[self.full_name] = self


# h1 = Human('A')

# print(Human.population)

#-------------------------------------------->
# class Thing:
#     pass

# t1 = Thing
# t1.info = 'stuff'