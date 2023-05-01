from django.db import models
from django.contrib.auth.models import User
# from polls.models import Post
# Create your models here.
class UserProfile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.user}'