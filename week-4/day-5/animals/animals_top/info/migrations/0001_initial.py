# Generated by Django 4.2 on 2023-04-23 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Family',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('legs', models.IntegerField()),
                ('weight', models.FloatField()),
                ('height', models.FloatField()),
                ('speed', models.FloatField()),
                ('family', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='info.family')),
            ],
        ),
    ]
