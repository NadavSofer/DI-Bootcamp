# Generated by Django 4.2 on 2023-05-02 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date_created',
            field=models.DateField(null=True),
        ),
    ]
