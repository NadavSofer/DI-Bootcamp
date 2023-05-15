from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    published_date = models.DateField()
    description = models.TextField()
    page_count = models.IntegerField(null=True)
    categories = models.CharField(max_length=50)
    thumbnail_url = models.URLField()

    def __str__(self) -> str:
        return self.title
    

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    review = models.TextField()

    def __str__(self) -> str:
        return f'{self.user}: {self.book}'