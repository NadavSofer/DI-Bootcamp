from django import forms
from .models import BookReview

class ReviewForm(forms.ModelForm):
    class Meta:
        model = BookReview
        fields = ['rating', 'review']
        widgets = {
            'rating': forms.NumberInput(attrs={'class': 'form-control', 'min': '0', 'max': '5'})
        }