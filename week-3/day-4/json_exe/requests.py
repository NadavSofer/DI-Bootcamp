import requests



response = requests.get('http://api.open-notify.org/iss-now.json')

print(response)

# 200 is good. anything that starts with 4 or 5 is bad