# Generated by Django 4.2 on 2023-05-15 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Book_Review_App', '0003_book_page_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='page_count',
            field=models.IntegerField(),
        ),
    ]
