from django import forms
from .models import Profile, Image

class ProfileForm(forms.ModelForm):
    class Meta():
        model = Profile
        fields = '__all__'
        widgets = {'user': forms.HiddenInput()}

class UploadImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = '__all__' 

        widgets = {
            'user': forms.HiddenInput(),
        }
