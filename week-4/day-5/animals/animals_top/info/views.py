from django.shortcuts import render
import json
# Create your views here.


def animal(request,id):
    f = open('static/animals.json')
    data = json.load(f)
    context = {'name': data['animals'][id]['name'], 'legs': data['animals'][id]['legs'], 'weight': data['animals'][id]['weight'], 'height': data['animals'][id]['height'], 'speed': data['animals'][id]['speed']}
    f.close()
    return render(request, 'animal.html', context)

def family(request,id):
    f = open('static/animals.json')
    data = json.load(f)
    context = {'family_name': data['families'][id]['name']}
    f.close()
    return render(request, 'family.html', context)




