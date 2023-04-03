from exe import Mammal

class LandMammal(Mammal):
    pass


if __name__ == '__name__': #-------------------------> this is important and will be explained later 
    monkey = LandMammal('monkey', 2)
    monkey.breathing()

