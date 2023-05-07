from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator



# Create your models here.
class Report(models.Model):
    report_choices = (
        ('cloudy','Cloudy'), 
        ('windy', 'Windy'), 
        ('rainy','Rainy'), 
        ('stormy','Stormy')
        )
    
    location = models.CharField(max_length=100)
    temperature = models.FloatField(validators=[MinLengthValidator(-90.0), MaxLengthValidator(60.0)])
    created_at = models.DateField(auto_now=True)
    weather_type = models.CharField(max_length=10, choices=report_choices, null=True)

    def __str__(self) -> str:
        return f'{self.location}, {self.temperature}'