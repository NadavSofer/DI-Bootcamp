# Generated by Django 4.2 on 2023-05-08 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management_API_App', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='department_administrator',
            field=models.BooleanField(default=False),
        ),
    ]
