from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self) -> str:
        return self.name

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='employee_user')
    name = models.CharField(max_length=50)
    email = models.EmailField
    phone_number = models.CharField(max_length=50)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    department_administrator = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self) -> str:
        return self.name

class Task(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    employee = models.ManyToManyField(Employee)

    def __str__(self) -> str:
        return self.name