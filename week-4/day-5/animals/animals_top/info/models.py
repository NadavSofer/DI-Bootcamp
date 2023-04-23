from django.db import models

# Create your models here.
# {



# {
#             "id": 1,
#             "name": "Felidae"
#         }


class Family(models.Model):
    # id is automatically created
    name = models.CharField(max_length=50)




class Animal(models.Model):
    # id is automatically created
    name = models.CharField(max_length=50)
    legs = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    speed = models.FloatField()
    family = models.ForeignKey(Family, on_delete=models.SET_NULL, null=True)
    image = models.URLField(null=True, blank=True)
    pass

Animal.objects.all()

