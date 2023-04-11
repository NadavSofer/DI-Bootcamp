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