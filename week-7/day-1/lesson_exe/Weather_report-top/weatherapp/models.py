from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User



# Create your models here.
class Report(models.Model):
    report_choices = (
        ('cloudy','Cloudy'), 
        ('windy', 'Windy'), 
        ('rainy','Rainy'), 
        ('stormy','Stormy')
        )
    
    location = models.CharField(max_length=100)
    temperature = models.FloatField(validators=[MinValueValidator(-90.0), MaxValueValidator(60.0)])
    created_at = models.DateField(auto_now=True)
    weather_type = models.CharField(max_length=10, choices=report_choices, null=True)

    author = models.ForeignKey('Reporter', on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return f'{self.location}, {self.temperature}'
    

class Reporter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.user)