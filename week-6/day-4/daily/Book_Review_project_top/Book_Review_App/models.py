from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    published_date = models.DateField()
    description = models.TextField()
    page_count = models.IntegerField
    categories = models.CharField(max_length=50)
    thumbnail_url = models.URLField()

    def __str__(self) -> str:
        return self.title