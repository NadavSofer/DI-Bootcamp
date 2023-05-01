from typing import Any
from django import forms
from .models import UserProfile
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser





class ProfileForm(forms.ModelForm):
    class Meta():
        Model = UserProfile
        fields = '__all__'
        widgets = {'user': forms.HiddenInput()}

class SignupForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields  = '__all__'

