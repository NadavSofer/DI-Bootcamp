# Exercise 3 : Dogs Domesticated
from mandatory import Dog

class PetDog(Dog):
    def __init__(self, name, age: int, weight: int) -> None:
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names_list = [self.name]
        for arg in args:
            dog_names_list.append(arg.name)

        dog_names_str = ', '.join(dog_names_list)
        
        out = f'{dog_names_str} all play together'

        return out

thing1 = PetDog('thing1', 5, 40)
thing2 = PetDog('thing2', 5, 50)
thing3 = PetDog('thing3', 5, 50)

print(thing1.play(thing2, thing3))