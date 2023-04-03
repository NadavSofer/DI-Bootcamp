# Exercise 1 : Pets ---------------------------------------------------------

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


all_cats = [Bengal('Kazis', 5), Chartreux('Xerxes', 300), Siamese('Phapta', 8)]
sara_pets = Pets(all_cats)
# sara_pets.walk()


# Exercise 2 : Dogs -------------------------------

class Dog:
    is_good_boy = True

    def __init__(self, name, age: int, weight: int) -> None:
        self.name = name
        self.age =age
        self.weight =weight
        

    def bark(self) -> str:
        out = f'{self.name} is barking'
        return out

    def run_speed(self) -> int:
        out = self.weight / self.age * 10
        return out

    def fight(self, other_dog) ->str:
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f'{self.name} wins'
        elif self_power < other_power:
            return f'{other_dog.name} wins'
        else:
            return 'draw'
        
thing1 = Dog('thing1', 5, 40)
thing2 = Dog('thing2', 5, 50)

# print(thing1.fight(thing2))