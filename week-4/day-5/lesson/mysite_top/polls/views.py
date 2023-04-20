from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
# Create your views here.

# def index(request):
#     return HttpResponse('<h1> this is the home page </h1>')

def index(request):
    current_time = datetime.now()
    current_hour = datetime.now().hour
    context = {'weather': 'warm', 'time': current_time, 'hour': current_hour}
    return render(request, 'index.html', context)
    

def profile(request):
    context = {'name': ['nadav', 'sofer'], 'age': 24}
    return render(request, 'profile_user.html', context)

# -------------------------connects backend and frontend 

