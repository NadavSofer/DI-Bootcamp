# Generated by Django 4.2 on 2023-05-14 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('author', models.CharField(max_length=50)),
                ('published_date', models.DateField()),
                ('description', models.TextField()),
                ('categories', models.CharField(max_length=50)),
                ('thumbnail_url', models.URLField()),
            ],
        ),
    ]
