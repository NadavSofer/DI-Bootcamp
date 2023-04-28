from django.db import models
# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=250)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'


class VehicleSize(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.name}'

class VehicleType(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return f'{self.name}'


class Vehicle(models.Model):
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now=True)
    real_cost = models.IntegerField()
    size = models.ForeignKey(VehicleSize, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f'{self.vehicle_type}'


class Rental(models.Model):
    rental_date = models.DateField(null=True)
    return_date = models.DateField(null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f'{self.customer}: {self.vehicle}, rental_date: {self.rental_date}, return_date: {self.return_date}'


class RentalRate(models.Model):
    daily_rate = models.DecimalField(max_digits=8, decimal_places=2)
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    vehicle_size = models.ForeignKey(VehicleSize, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f'{self.daily_rate}'