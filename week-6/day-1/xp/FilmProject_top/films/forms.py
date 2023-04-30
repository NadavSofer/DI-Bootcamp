from django import forms
from .models import Director, Country ,Category, Film

class AddFilmForm(forms.ModelForm):
    class Meta():
        model = Film
        fields = '__all__'

        widgets = {'category' : forms.CheckboxSelectMultiple}

class AddDirectorForm(forms.ModelForm):
    class Meta():
        model = Director
        fields = '__all__'