from django.shortcuts import render
from django.views import generic
from django.urls import reverse_lazy
from .models import UserProfile
from .forms import SignupForm

from django.contrib.auth.models import User

# Create your views here.
class profile_view(generic.DetailView):
    model = User
    template_name= 'profile.html'
    context_object_name = 'profile'

class signup_view(generic.CreateView):
    form_class = SignupForm
    success_url = reverse_lazy('login')
    template_name = 'sign_up.html'