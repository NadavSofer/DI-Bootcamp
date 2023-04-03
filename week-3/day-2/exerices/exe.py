class Animal:

    def __init__(self, name: str) -> None:
        self.name = name

    def breathing(self):
        out = f'{self.name} breaths'
        print(out)



class Mammal(Animal):

    def __init__(self, name: str, lungs: int) -> None:
        super().__init__(name)
        self.lungs = lungs

    def produce_milk(self):
        out = f'{self.name} produces milk'
        print(out)


class SeaMammals(Mammal):

    def __init__(self, name: str, lungs: int) -> None:
        super().__init__(name, lungs)
        self.fins = True

    def hold_breath(self):
        out = f'{self.name} holds breath'
        print(out)

mammal = SeaMammals('dolphin', 2)


mammal.breathing()
mammal.produce_milk()
mammal.hold_breath()


# -----------------------------------------------------

# class Door:
#     def is_opened(self):
#         print('door is open')

#     def is_closed(self):
#         print('door is closed')


# class Blocked_Door(Door):
#     def is_opened(self):
#         func_name = open.__name__
#         raise SyntaxError(f'{func_name}: door can not be opened, it is blocked')

#     def is_closed(self):
#         raise SyntaxError('door is closed and blocked')

# door = Door()

# blocked_door= Blocked_Door()

# blocked_door.is_opened()

# ---------------------------------------------

password = 12345

logged_in = False

while not logged_in:
    try:
        user_in = int(input('type password: '))
        if user_in == password:
            print("you're in")
            logged_in = True
        else:
            print('wrong password')
    except ValueError:
        print('not a integer. please enter number')