# Daily Challenge 1: Modules---------------------------------

import requests

def response_time(url):
    response = requests.get(url)
    response_time_out = response.elapsed
    return response_time_out

youtube_response = response_time('https://www.youtube.com')
github_response = response_time('https://github.com/NadavSofer/DI-Bootcamp')
di_response = response_time('http://learn.di-learning.com/courses/')

print(youtube_response)
print(github_response)
print(di_response)

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
