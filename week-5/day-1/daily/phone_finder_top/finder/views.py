from django.shortcuts import render
from.models import Person
# Create your views here.

def person_name(request, name):
    person = Person.objects.get(name = name)
    context = {'person' : person}
    return render(request, 'find_by_name.html', context)

def person_number(request, phone):
    person = Person.objects.get(phone = phone)
    context = {'person' : person}
    return render(request, 'find_by_phone.html', context)