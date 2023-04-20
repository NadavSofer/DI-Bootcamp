from django.shortcuts import render

# Create your views here.


people = [
    {'id': 1,'name': 'Bob Smith','age': 35,'country': 'USA'},
    {'id': 2,'name': 'Martha Smith','age': 60,'country': 'USA'},
    {'id': 3,'name': 'Fabio Alberto','age': 18,'country': 'Italy'},
    {'id': 4,'name': 'Dietrich Stein','age': 85,'country': 'Germany'}
]



def people(request):
    context = {}
    return render(request, 'people.html', context)

def person(request, id):
    context = {}
    for thing_id, item in enumerate(people):
        if id == thing_id:
            context = {'name': item[thing_id]['name']}
    return render(request, 'person.html', context)