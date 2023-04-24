from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True) #---------------> could have been emailfield
    phone = PhoneNumberField(null = False, blank= False, unique=True)
    address = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.name} | {self.phone} | {self.address}'
    


class Profile(models.Model):

    person = models.OneToOneField('Person', on_delete = models.CASCADE)
    country = models.CharField(max_length=50)
    languages = models.ManyToManyField('Language')

    def __str__(self) -> str:
        return f'{self.country}'

class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.name}'
    
