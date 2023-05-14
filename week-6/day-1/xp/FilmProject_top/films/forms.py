from django import forms
from .models import Director, Country ,Category, Film, Reviews

class AddFilmForm(forms.ModelForm):
    class Meta():
        model = Film
        fields = '__all__'

        widgets = {'category' : forms.CheckboxSelectMultiple}

class AddDirectorForm(forms.ModelForm):
    class Meta():
        model = Director
        fields = '__all__'

class ReviewForm(forms.ModelForm):
    class Meta():
        model = Reviews
        fields = '__all__'
        widgets = {
            'rating': forms.NumberInput(attrs={'class': 'form-control', 'min': '1', 'max': '5'}),
        }
