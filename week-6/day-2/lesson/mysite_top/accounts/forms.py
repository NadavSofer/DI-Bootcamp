from django import forms
from .models import UserProfile

class ProfileForm(forms.ModelForm):
    class Meta():
        Model = UserProfile
        fields = '__all__'
        widgets = {'user': forms.HiddenInput()}