from django.db import models
from accounts.models import UserProfile
from django.core.validators import MinLengthValidator
from .validators import date_validator
from datetime import date
from django.core.exceptions import ValidationError
# Create your models here.
class Post(models.Model):

    title = models.CharField(max_length=50, validators=[MinLengthValidator(5)])
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='posts', null=True)
    date_created = models.DateField(null=True, validators=[date_validator])

    def __str__(self) -> str:
        return self.title
    
    def clean(self) -> None:
        super().clean()
        if self.title.lower().endswith('z') and self.date_created == date.today():
            raise ValidationError('title cannot end with z and the date cannot be today')
        

class comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True)
    created_at = models.DateField(auto_now=True)
    content = models.TextField()

    def __str__(self) -> str:
        return f'{self.post.title} | {self.created_at} | {self.short_content()}'
    
    def short_content(self):
        return self.content [:15]