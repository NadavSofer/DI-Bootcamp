class AnagramChecker:
    def __init__(self, path) -> None:
        with open(path, 'r') as file:
            self.text_list = file.readlines()
        self.clean_text_list = []
        for i in range(0, len(self.text_list)):
            self.clean_text_list.append(self.text_list[i].strip('\n').lower())

    def is_valid_word(self, word):
        if type(word) == str and word.isalpha() == True and ' ' not in word:
            return True
        else:
            return False

    def get_anagrams(self, word):
        anagram_list = []
        valid_word = self.is_valid_word(word)
        if valid_word == True:
            for item in self.clean_text_list:
                if sorted(word) == sorted(item):
                    anagram_list.append(item)
        else:
            return 'invalid word. no numbers or spaces allowed.'
        return anagram_list



