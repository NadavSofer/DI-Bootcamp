from django import forms
from.models import Category_Model, Gif_model


class GifForm(forms.ModelForm):
    class Meta:
        model = Gif_model
        fields = ('title', 'url', 'uploader_name')
        exclude = ('likes',)
        # widgets = {
        #     'title': forms.Textarea(attrs={'class': 'title.class', 'id': '1'})
        #     }

    categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all(),widget=forms.CheckboxSelectMultiple,label='Categories')
    # uploader_name = forms.CharField(label="Uploader name", max_length=30)
    # title = forms.CharField(label="title", max_length=50)
    # url = forms.URLField(required=True)
    # categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all(),widget=forms.CheckboxSelectMultiple,label='Categories')

class CategoryForm(forms.ModelForm):
        
    class Meta:
        model = Category_Model
        fields = '__all__'
    # name = forms.CharField(label="name", max_length=30)



class Likes(forms.Form):

    class Meta:
        exclude = ('gif',)

    gif = forms.ModelChoiceField(queryset=Gif_model.objects.all())
    like = forms.BooleanField()
    dislike = forms.BooleanField()

