import json
file_name = 'data.json'
data = {
    'weather': 'cool',
    'numbers': [1,2,3,4,5]
}



with open(file_name, 'w') as file:
    json.dump(data, file)

data = {}
with open(file_name, 'r') as file:
    data = json.load(file)

print(data)


