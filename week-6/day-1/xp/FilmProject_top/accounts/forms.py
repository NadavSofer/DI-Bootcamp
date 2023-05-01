from typing import Any
from django import forms
from .models import UserProfile
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User




class ProfileForm(forms.ModelForm):
    class Meta():
        Model = UserProfile
        fields = '__all__'
        widgets = {'user': forms.HiddenInput()}

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields  = ['username', 'first_name', 'last_name', 'password1', 'password2']