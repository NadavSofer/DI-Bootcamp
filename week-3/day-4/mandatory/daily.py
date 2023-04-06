from collections import Counter

stranger = 'the_stranger.txt'

with open(stranger, 'r') as file:
    new_text = file.readlines()

class Text:
    def __init__(self, text=None) -> None:
        if text != None:
            self.text = text
        else:
            self.text = 'A good book would sometimes cost as much as a good house.'
            
        self.text_list = self.text.lower().split()
        
    def frequency(self, word):
        return self.text_list.count(word)

    def most_common(self):
        
        most_common_list = Counter(self.text_list).most_common()
        most_common_word = most_common_list[0][0]
        return most_common_word


    def unique_words(self):
        unique_words_list = []
        for word in self.text_list:
            if self.frequency(word) == 1:
                unique_words_list.append(word)
        return unique_words_list

    @classmethod
    def from_file(self, other):
        Text.from_file('the_stranger.txt')

text = Text()

print(text.frequency('as'))
print(text.unique_words())