# Generated by Django 4.2 on 2023-05-03 07:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_userprofile_user'),
        ('polls', '0004_alter_post_date_created_alter_post_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateField(auto_now=True)),
                ('content', models.TextField()),
                ('author', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.userprofile')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.post')),
            ],
        ),
    ]
