from collections import Counter

stranger = 'the_stranger.txt'



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
        return list(set(self.text_list))

    @classmethod
    def from_file(self, path):
        with open(path, 'r') as file:
            new_text_list = file.readlines()
            joined_new_text = ' '.join(new_text_list)
            return Text(joined_new_text)

text = Text()

stranger_text = Text.from_file(stranger)


print(text.frequency('as'))
print(text.unique_words())

print('\n')
print(stranger_text.most_common())
print(stranger_text.frequency('the'))