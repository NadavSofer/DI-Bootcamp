from typing import Any, Dict
from django import forms
from .models import Post
from django.core.exceptions import ValidationError

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = '__all__'

        widgets = {'author': forms.HiddenInput()}

    def clean_title(self):
        title = self.cleaned_data['title']
        if title.startswith('A'):
            raise ValidationError('the title cannot start with the letter A')
        return title
    
    def clean(self) -> Dict[str, Any]:
        clean_data = super().clean()
        author = clean_data['author']
        title = clean_data['title']
        if author.user.username == 'nadavs':
            if title.lower() == 'test':
                raise ValidationError('you cannot make test posts')
