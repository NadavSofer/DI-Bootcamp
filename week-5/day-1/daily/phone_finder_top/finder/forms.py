from django import forms
from.models import Person

class add_person_form(forms.ModelForm):
    class Meta:
        model = Person
        fields = '__all__'