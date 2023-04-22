from django.shortcuts import render

# Create your views here.


people = [
    {'id': 1,'name': 'Bob Smith','age': 35,'country': 'USA'},
    {'id': 2,'name': 'Martha Smith','age': 60,'country': 'USA'},
    {'id': 3,'name': 'Fabio Alberto','age': 18,'country': 'Italy'},
    {'id': 4,'name': 'Dietrich Stein','age': 85,'country': 'Germany'}
]



def get_people(request):
    name_list = []
    age_list = []
    country_list = []
    for item in people:
        name_list.append(item['name'])
        age_list.append(str(item['age']))
        country_list.append(item['country'])

    str_names = ', '.join(name_list)
    str_ages = ', '.join(age_list)
    str_countries = ', '.join(country_list)

    context = {"names": str_names, "ages": str_ages ,"countries": str_countries}
    return render(request, 'people.html', context)

def get_person(request, id):
    context = {}
    for item in people:
        if id == item['id']:
            context = {'person_name': item['name'], 'person_age': item['age'], 'person_country': item['country']}
    return render(request, 'person.html', context)