# Generated by Django 4.2 on 2023-05-03 11:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('image_share', '0003_profile_imges_uploaded'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='imges_uploaded',
            new_name='images_uploaded',
        ),
    ]
