from django.db import models

# Create your models here.
CATEGORY_CHOICES = (
    ('Dj', 'Django'),
    ('Py', 'Python'),
)

class Student(models.Model):

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    date_joined = models.DateField(auto_now=True)
    def __str__(self):
        return f'{self.first_name} {self.last_name}'

