from django.db import models
from accounts.models import UserProfile
# Create your models here.
class Post(models.Model):

    title = models.CharField(max_length=50)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='posts', null=True)

    def __str__(self) -> str:
        return self.title