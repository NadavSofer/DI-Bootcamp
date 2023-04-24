from django.db import models

# Create your models here.
class Gif_model(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField()
    uploader_name = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return self.title

class Category_Model(models.Model):
    name = models.CharField(max_length=20, unique=True)
    gifs = models.ManyToManyField(Gif_model, blank = True)

    def __str__(self) -> str:
        return self.name
