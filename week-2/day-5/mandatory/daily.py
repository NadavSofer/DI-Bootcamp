string = 'without,hello,bag,world'

str_split = string.split(',')

list_sorted = sorted(str_split)

string_sorted = ', '.join(list_sorted)
print(string_sorted)