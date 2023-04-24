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





def search(model, value):

    result = None
    try:
        model_instance = model.objects.get(name = value)
        result = model_instance
    except model.DoesNotExist:
        pass
    try:
        model_instance = model.objects.get(phone = value)
        result = model_instance
    except model.DoesNotExist:
        pass

    return result


def search_person(request, search_value: str):

    context = {}

    person_info = search(Person, search_value)

    if person_info is not None:
        context = {'person': person_info}

    return render(request, 'person_info.html', context)

def profile_view(request, search_value):
    context = {}

    person_info = search(Person, search_value)

    if person_info is not None:
        person_profile = person_info.profile
        person_languages = person_info.languages.all()

        context = {'person_info': person_info, 'person_profile': person_profile, 'person_languages':person_languages}
    
    return render(request, 'profile.html', context)