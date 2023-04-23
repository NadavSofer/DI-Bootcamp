from django.shortcuts import render
import json
from.models import Animal, Family
# Create your views here.


def all_animals(request): 
    animals = Animal.objects.all()
    context = {'animals': animals}
    return render(request, 'animals.html', context)


def animal(request, id: int):
    instance = Animal.objects.get(id=id)
    context = {'animal': instance}
    return render(request, 'animal.html', context)


def family(request, id: int):
    family_instance = Animal.objects.filter(family_id=id)
    context = {'family': family_instance}
    return render(request, 'family.html', context)


# falconidae = Family.objects.get(name='Falconidae')
# Scorpaenidae = Family.objects.get(name='Scorpaenidae')
# animal = Animal(name='Falcon',legs=2, weight=1.67, height=0.5, speed=110, family=falconidae)
# animal = Animal(name='Red lionfish',legs=0, weight=1.67, height=0.1, speed=24, family=Scorpaenidae)