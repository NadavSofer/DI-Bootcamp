# Daily Challenge 2 part 1: OOP Quizz-------------------------------------

# What is a class? ->  a class is a template for creating objects and methods.
# What is an instance? -> an individual object of a class
# What is encapsulation? -> defining methods and attributes in a single class
# What is abstraction? ->  hiding unnecessary info from the user
# What is inheritance? -> allow a class to get methods and properties from their parent class
# What is multiple inheritance? -> a class with multiple parent classes
# What is polymorphism? -> using the same function name for different things (that are usually similar)
# What is method resolution order or MRO? -> the order of which python search for methods. form bottom up, from left to right

# Daily Challenge 2 Part 2: Create A Deck Of Cards Class--------------------


import random
class Card:
    def __init__(self, suit, value) -> None:
        self.suit = suit
        self.value = value

    def show_card(self):
        return (f'{self.value} of {self.suit}')

class Deck:
    def __init__(self) -> None:
        self.suit_list = ['spades', 'clubs', 'diamonds', 'hearts']
        self.value_list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.deck = []

    def make_deck(self):
        for suit in self.suit_list:
            for value in self.value_list:
                new_card = Card(suit, value)
                self.deck.append(Card.show_card(new_card))
        return self.deck
    
    def shuffle(self):
        random.shuffle(self.deck) 
        return self.deck
    
    def deal(self):
        dealt_card = self.deck.pop(0)
        self.deck = self.deck
        return dealt_card

deck = Deck()
deck.make_deck()
deck.shuffle()

print(deck.deal())