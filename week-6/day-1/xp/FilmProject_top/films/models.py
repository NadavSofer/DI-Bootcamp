from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return f'{self.name}'

class Category (models.Model):
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return f'{self.name}'
    

class Film(models.Model):
    title = models.CharField(max_length=50)
    release_date =  models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE)
    available_in_countries = models.ManyToManyField(Country, related_name='films_available_in_countries')
    category =  models.ManyToManyField(Category)
    director = models.ManyToManyField('Director')
    def __str__(self) -> str:
        return f'{self.title}'

class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'