# Generated by Django 4.2 on 2023-04-25 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gif_app', '0003_alter_category_model_gifs'),
    ]

    operations = [
        migrations.AddField(
            model_name='gif_model',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
