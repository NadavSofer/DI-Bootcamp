# Generated by Django 4.2 on 2023-04-24 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gif_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category_model',
            name='gifs',
            field=models.ManyToManyField(blank=True, to='gif_app.gif_model'),
        ),
        migrations.AlterField(
            model_name='category_model',
            name='name',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='gif_model',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='gif_model',
            name='uploader_name',
            field=models.CharField(max_length=20),
        ),
    ]
