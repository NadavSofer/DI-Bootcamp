import anagram_checker


def anagram_for_user(file):
    while True:
        user_in = input('type a single word to continue or exit1 to quit: ')
        if user_in == 'exit1':
            break
        else:
            anagram = anagram_checker.AnagramChecker(f'{file}.txt')
            test = anagram.get_anagrams(user_in)
            out_str = ', '.join(test)
            if type(test) == list:
                if len(test) > 0:
                    print(
f"""\nYOUR WORD :{user_in}
this is a valid English word.
Anagrams for your word: {out_str}\n""")
                else:
                    print('no anagrams here, just disappointment...')
            elif type(test) == str:
                print(test)

anagram_for_user('test')

# anagram = AnagramChecker('xp.txt')