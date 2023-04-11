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


