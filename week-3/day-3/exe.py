# class Person:
#     def __init__(self, name) -> None:
#         self.__name= name #--------------------------> the __ before the variable changes the name of the variable so it is private

#     @property
#     def name(self):
#         return self.__name
    
#     @name.setter
#     def name(self, new_name:str):
#         self.__name = new_name


# person = Person('steve')

# print(person.__dict__)


# person.name = 'ben'
# print(person.name)


# ------------------------------------------------------------------------

# class Useful:
#     @staticmethod
#     def cap_word(word:str):
#         return word.capitalize()
    
#     @staticmethod
#     def multi(num:int):
#         return num * 2
    
# thing = Useful.cap_word('word')
# multi = Useful.multi(5)

# print(multi)

# -----------------------------------------------------------------------------

class Object:
    num = 0
    objects = {}

    def __init__(self) -> None:
        Object.objects[Object.num] = self
        Object.num += 1


    @classmethod
    def find_object(cls, id:int):
        if id in cls.objects:
            retrieved = cls.objects[id]
            print(retrieved)
            return retrieved
        else:
            print('not here')
