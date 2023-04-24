from django import forms
from.models import Category_Model


class GifForm(forms.Form):
    uploader_name = forms.CharField(label="Uploader name", max_length=30)
    title = forms.CharField(label="title", max_length=50)
    url = forms.URLField(required=True)
    categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all(),widget=forms.CheckboxSelectMultiple,label='Categories')

class CategoryForm(forms.Form):
    name = forms.CharField(label="name", max_length=30)