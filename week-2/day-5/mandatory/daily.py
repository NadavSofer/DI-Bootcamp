string = 'without,hello,bag,world'

str_split = string.split(',')

new_list = [word for word in str_split] #----------------------------------->
list_sorted = sorted(str_split)

string_sorted = ', '.join(list_sorted)
print(string_sorted)