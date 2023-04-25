from django import forms
from.models import Todo, Category


class todo_form(forms.ModelForm):
    class Meta:
        model = Todo
        fields = '__all__'
        exclude = ('date_completion',)